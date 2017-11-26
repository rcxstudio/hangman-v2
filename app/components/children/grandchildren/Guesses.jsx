import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class Guesses extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
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
