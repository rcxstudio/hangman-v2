import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class GuessArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display: '',
      wordCheck: ''
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
    console.log('Updated, display: ', this.state.display);
    console.log('Updated, wordCheck: ', this.state.wordCheck);

    if (this.props.wordToGuess !== this.state.wordCheck) {
      let hiddenLetters = this.props.wordToGuess;
      this.setState({ wordCheck: this.props.wordToGuess }, () => {
        let tempHidden = '';
        for (let i = 0; i < hiddenLetters.length; i++) {
          if (hiddenLetters[i] !== ' ') {
            tempHidden += '_';
          }
          else tempHidden += '\xa0';
        }
        this.setState({ display: tempHidden });
      });
    };
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e) {
    let partialWord = this.state.display.toUpperCase();
    let currentKey = e.key.toUpperCase();

    console.log(this.state.display.length);
    console.log(this.state.wordCheck.length);

    for (let i = 0; i < partialWord.length; i++) {
      if (currentKey === this.state.wordCheck[i].toUpperCase()) {
        this.props.setLetter(e.key.toLowerCase());
        console.log('found it!', this.state.display);
        partialWord = partialWord.substr(0, i) + currentKey + partialWord.substr(i + 1);
      }
      // TODO: fix issue where correct letter is still subtracting from count; change the conditional here
      else if (currentKey !== this.state.wordCheck[i].toUpperCase() && !this.props.usedLetters[e.key.toLowerCase()]) {
        this.props.setLetter(e.key.toLowerCase());
        this.props.setGuessesLeft(this.props.guessesLeft - 1);
      }
    }
    this.setState({display: partialWord});
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
