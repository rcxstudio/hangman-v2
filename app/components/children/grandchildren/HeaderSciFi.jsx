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
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>MERNman - Sci-Fi Theme</h1>
          </div>
        </div>
      </header>
  )}
}

export default HeaderSciFi;
