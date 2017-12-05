import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class LetterBank extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let selectedTheme;
    if (this.props.theme['videogames']) {
      selectedTheme = 'vg-panel-hdr';
    }
    else if (this.props.theme['scifi']) {
      selectedTheme = 'scifi-panel-hdr';
    }
    else if (this.props.theme['fantasy']) {
      selectedTheme = 'fantasy-panel-hdr';
    }

    return (
      <div className="panel panel-default">
        <div className={`panel-heading ${selectedTheme}`}>
          <h3 className="panel-title ">Letter Bank</h3>
        </div>
        <div className="panel-body letterbank">
          {Object.keys(this.props.letters).map((key, i) => {
            if (this.props.wrongLetters[key]) {
              return <span key={key} data-toggle="wrong">{key.toUpperCase()}</span>;
            }
            else if (this.props.letters[key]) {
              return <span key={key} data-toggle="correct">{key.toUpperCase()}</span>;
            }
            else {
              return <span key={key} data-toggle="inactive">{key.toUpperCase()}</span>;
            }
          })}
        </div>
      </div>
  )}
}

export default LetterBank;
