import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class LetterBank extends React.Component {
  constructor(props){
    super(props);
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
            if (this.props.wrongLetters[key]) {
              return <span key={key} data-toggle="wrong">{key.toUpperCase()} </span>;
            }
            else if (this.props.letters[key]) {
              return <span key={key} data-toggle="correct">{key.toUpperCase()} </span>;
            }
            else {
              return <span key={key} data-toggle="inactive">{key.toUpperCase()} </span>;
            }
          })}
        </div>
      </div>
  )}
}

export default LetterBank;
