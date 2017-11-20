import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class GuessArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display: '',
    }

  }

  componentDidMount() {
    console.log('GRANDKID on mount!', this.props.wordToGuess);
  }

  componentDidUpdate() {
    console.log('GRANDKID on update!', this.props.wordToGuess);
    // NOTE: infinite loop in below code for the updates
    // if (this.props.wordToGuess !== '') {
    //   const underscore = '_'.repeat(this.props.wordToGuess.length);
    //   this.setState({display: underscore})
    // }
    // else {
    //   this.setState({display: 'Waiting for word...'})
    // }
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  letterCheck() {

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
    // TODO: Set a variable here so underscores can replace the word to guess
    let hidden = '_' + ' ';
    // Check if all letters are false, then

    // Show all underscores if they are.
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
