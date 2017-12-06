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
    let topScoreDisplay;
    if (this.props.theme['videogames']) {
      selectedTheme = 'vg-panel-hdr';
      topScoreDisplay = 'Video Game Theme';
    }
    else if (this.props.theme['scifi']) {
      selectedTheme = 'scifi-panel-hdr';
      topScoreDisplay = 'Sci-Fi Theme';
    }
    else if (this.props.theme['fantasy']) {
      selectedTheme = 'fantasy-panel-hdr';
      topScoreDisplay = 'Fantasy Theme';
    }

    return (
      <div className="panel panel-default">
        <div className={`panel-heading ${selectedTheme}`}>
          <h3 className="panel-title ">{`${topScoreDisplay} - Top 10 Scores`}</h3>
        </div>
        <div className="panel-body">
          Feature in development...
        </div>
      </div>
  )}
}

export default TopScores;
