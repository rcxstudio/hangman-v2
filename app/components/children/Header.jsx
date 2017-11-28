import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../utils/helpers.js';

class Header extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>MERNman</h1>
          </div>
        </div>
      </header>
  )}
}

export default Header;
