import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header.jsx';


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
              <ul className="list-group">
                <Link to="/videogames"><li className="list-group-item">Video Games</li></Link>
                <li className="list-group-item"><Link to="/fantasy">Fantasy</Link></li>
                <li className="list-group-item"><Link to="/scifi">Sci-Fi</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )};
}

export default Themes;
