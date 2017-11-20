import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class GuessArea extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   currentUser: ''
    // }
    //
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('GRANDKID on mount!', this.props.wordToGuess)
  }

  componentDidUpdate() {
    console.log('GRANDKID on update!', this.props.wordToGuess)
  }

  render() {
    // TODO: Set a variable here so underscores can replace the word to guess
    let hidden = '_';

    return (
      <div>
        <div className="panel panel-default ">
          <div className="panel-heading">
            <h3 className="panel-title ">Hidden Word</h3>
          </div>
          <div className="panel-body">
            {hidden}
          </div>
        </div>
      </div>
  )}
}

export default GuessArea;
