import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class Guesses extends React.Component {
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
          <h3 className="panel-title ">Guesses Left</h3>
        </div>
        <div className="panel-body">
          {this.props.guessesLeft}
        </div>
      </div>
  )}
}

export default Guesses;
