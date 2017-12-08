import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class HeaderGames extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row" id="videogames-header">
          <div className="col-md-12 text-center">
            <Link to="/">
              <h1>MERNman - Video Game Theme</h1>
            </Link>
          </div>
        </div>
      </header>
  )}
}

export default HeaderGames;
