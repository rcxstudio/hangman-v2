import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../utils/helpers.js';

class Header extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    console.log('Default header loaded.')
  }

  handleClick() {

  }

  render() {
    return (
      <header className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Hangman - version 2</h1>
          </div>
        </div>
      </header>
  )}
}

export default Header;
