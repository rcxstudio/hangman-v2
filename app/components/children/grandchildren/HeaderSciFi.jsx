import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../../utils/helpers.js';

class HeaderSciFi extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row"  id="scifi-header">
          <div className="col-md-12 text-center">
            <Link to="/">
              <h1>MERNman - Sci-Fi Theme</h1>
            </Link>
          </div>
        </div>
      </header>
  )}
}

export default HeaderSciFi;
