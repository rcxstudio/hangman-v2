import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class LetterBank extends React.Component {
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
          {/*TODO: Pass state for wrong letters so conditionals below can check if letter is pressed && part of the wrong letters
          */}
          {/*NOTE: There might be a more efficient way of doing this?*/}
          {Object.keys(this.props.letters).map((key, i) => {
            if (this.props.letters[key]) {
              console.log('running');
              return <span key={key} data-toggle="active">{key.toUpperCase()} </span>;
            }
            else {
              console.log('each letter ran');
              return <span key={key} data-toggle="inactive">{key.toUpperCase()} </span>;
            }
          })}
        </div>
      </div>
  )}
}

export default LetterBank;
