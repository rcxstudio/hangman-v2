import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class TopScores extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title ">Top 10 Scores</h3>
        </div>
        <div className="panel-body">
          {this.props.winStreak}
        </div>
      </div>
  )}
}

export default TopScores;
