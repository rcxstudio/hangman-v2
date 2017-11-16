import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class WordBank extends React.Component {
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
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title ">Letter Bank</h3>
        </div>
        <div className="panel-body">
          {/*TODO: Change below to show the letter bank!*/}
          {Object.keys(this.props.letters).map((key, i) => {
            if (this.props.letters[key]) {
              return <p key={key}>a</p>;
            }
            else return <p key={key}>b</p>;
            }
          )}
        </div>
      </div>
  )}
}

export default WordBank;
