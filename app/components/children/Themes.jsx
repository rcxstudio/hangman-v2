import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header.jsx';


class Themes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render () {
    return(
      <div>
        <img className="background-image" src="./images/landscape-web.jpg" alt="landscape image" />
        <Header />
        <ul>
          <li><Link to="/videogames">Video Games</Link></li>
          <li><Link to="/fantasy">Fantasy</Link></li>
          <li><Link to="/scifi">Sci-Fi</Link></li>
        </ul>
      </div>
    )};
}

export default Themes;
