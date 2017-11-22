import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class GuessArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display: ''
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
    helpers.retrieveVideogame().then(res => {
      this.props.setTheme(res.data.theme);
      const receivedWordBank = res.data.themeBank;
      const objWordBank = {};
      for (let i = 0; i < receivedWordBank.length; i++) {
        objWordBank[receivedWordBank[i]] = false;
      };
      // NOTE: below portion of code used to reduce the wordBank so no duplicates occur for user.
      const keys = Object.keys(objWordBank);
      const starterWord = keys[Math.floor(Math.random() * keys.length)];
      this.props.setWord(starterWord);
      delete objWordBank[starterWord];
      this.props.setWordBank(objWordBank);
    });
  }

  componentDidUpdate() {
    console.log('Updated, word decided: ', this.props.wordToGuess);
    if (this.props.wordToGuess !== this.state.display) { //NOTE: Fix conditional 
      let hiddenLetters = this.state.display;
      for (let i = 0; i < hiddenLetters.length; i++) {
        if ((hiddenLetters[i] !== ' ' && hiddenLetters[i + 1] !== ' ') || hiddenLetters[hiddenLetters.length - 1]) {
          hiddenLetters[i] = '_';
        }
        else if (hiddenLetters[i] !== '_' || hiddenLetters[i] !== ' ') {
          hiddenLetters[i] = '_ ';
        }
      }
      this.setState({display: this.props.wordToGuess})
    };
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e) {
    let word = this.props.wordToGuess;
    for (let i = 0; i < word.length; i++) {
      if (e.key.toUpperCase() === word[i].toUpperCase()) {
        console.log('found it!');
      }
    }
    this.props.setLetter(e.key);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default ">
          <div className="panel-heading">
            <h3 className="panel-title ">Hidden Word</h3>
          </div>
          <div className="panel-body">
            {this.state.display}
          </div>
        </div>
      </div>
  )}
}

export default GuessArea;
