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

  }

  componentDidMount() {
    console.log('GRANDKID on mount!', this.props.wordToGuess);
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentDidUpdate() {
    console.log('updated...')
    console.log('word decided: ', this.props.wordToGuess);
    if (this.props.wordToGuess !== this.state.display) {
      let hiddenLetters = '_ ';
      this.setState({display : this.props.wordToGuess})
    };
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e) {
    console.log('event', e.key);
    let word = this.props.wordToGuess
    for (let i = 0; i < word.length; i++) {
      if (e.key.toLowerCase() === word[i].toLowerCase()) {
        console.log('found it!');
      }
    }
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
