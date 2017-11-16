import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class HeaderGames extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   currentUser: ''
    // }
    //
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick() {

  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Hangman Video Game Theme</h1>
          </div>
        </div>
      </header>
  )}
}

export default HeaderGames;
