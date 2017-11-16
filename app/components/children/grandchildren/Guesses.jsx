import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class Guesses extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   currentUser: ''
    // }
    //
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // console.log('GRANDKID on mount!', this.props.wordToGuess)
  }

  componentDidUpdate() {
    // console.log('GRANDKID on update!', this.props.wordToGuess)
    console.log('GRANDKID on update guessesLeft!', this.props.guessesLeft)
  }

  render() {
    // TODO: function to replace streak count
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title ">Guesses Left</h3>
        </div>
        <div className="panel-body">
          {this.props.guessesLeft}
        </div>
      </div>
  )}
}

export default Guesses;
