import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../utils/helpers.js';

class Header extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   currentUser: ''
    // }
    //
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({currentUser: this.props.username})
  }

  handleClick() {

  }

  render() {
    const username = this.props.username;

    return (
      <header className="container">
        <div className="row">
          <div className="col-md-8 text-center">
            <h1>{`Welcome, ${username}!`}</h1>
          </div>
          <div className="col-md-2 text-center">
            <button onClick={this.handleClick} type="submit" className="btn btn-default auth-buttons">
              Log Out
            </button>
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </header>
  )}
}

export default Header;
