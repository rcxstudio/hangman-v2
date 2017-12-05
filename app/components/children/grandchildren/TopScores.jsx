import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class TopScores extends React.Component {
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
          <h3 className="panel-title ">Top 10 Scores</h3>
        </div>
        <div className="panel-body">
          Add list of 10 scorers
        </div>
      </div>
  )}
}

export default TopScores;
