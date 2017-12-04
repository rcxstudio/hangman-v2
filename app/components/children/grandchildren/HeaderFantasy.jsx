import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class HeaderFantasy extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center" id="fantasy-header">
            <Link to="/">
              <h1>MERNman - Fantasy Theme</h1>
            </Link>
          </div>
        </div>
      </header>
  )}
}

export default HeaderFantasy;
