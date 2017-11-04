import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render () {
    return(
      <div>
        <ul>
          <li>Video Games</li>
          <li>Fantasy</li>
          <li>Sci-Fi</li>
          <li>Programming</li>
        </ul>
      </div>
    )};
}

export default Guest;
