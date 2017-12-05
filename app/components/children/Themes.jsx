import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header.jsx';
import Copyright from './Copyright.jsx';
import TopScores from './grandchildren/TopScores.jsx';


class Themes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-group" id="theme-list">
                <Link to="/videogames"><li className="list-group-item" id="videogames-theme">Video Games</li></Link>
                <Link to="/fantasy"><li className="list-group-item" id="fantasy-theme">Fantasy</li></Link>
                <Link to="/scifi"><li className="list-group-item"id="scifi-theme">Sci-Fi</li></Link>
              </ul>
            </div>
          </div>
        </section>
        <Copyright />
      </div>
    )};
}

export default Themes;
