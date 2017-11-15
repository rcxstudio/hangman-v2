import React from 'react';
import { Link } from 'react-router-dom';

class Themes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render () {
    return(
      <div>
        <ul>
          <li><Link to="/videogames">Video Games</Link></li>
          <li><Link to="/fantasy">Fantasy</Link></li>
          <li><Link to="/scifi">Sci-Fi</Link></li>
        </ul>
      </div>
    )};
}

export default Themes;
