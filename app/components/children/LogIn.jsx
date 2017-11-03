import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from './Header.jsx';
import helpers from '../utils/helpers.js';
import Main from '../Main.jsx'

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    (event.target.type === 'email') ? this.setState({email: event.target.value}) : this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    console.log('Login Submitted! user = ', user);
    helpers.authUser(user).then(
      // NOTE: see server.js for note regarding received object of foundUser.
      (foundUser) => {
        if (foundUser.data === 'Wrong Password') {
          console.log('Wrong password.')
        }
        else if (foundUser.data === 'NOTHING HERE') {
          console.log('got nothing.')
        }
        else {
          console.log('from Login foundUser', foundUser)
          this.props.setUsername(foundUser.data.username);
          this.props.setEmail(foundUser.data.email);
          this.props.setPassword(foundUser.data.password);
          //TODO: come back and fix this... a little hacky
          this.props.setLoggedIn(true);
        }
      })
  }

  render() {
    return (
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col-md-4 col-md-offset-4" id="login-wrap">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
            </div>

            <button type="submit" className="btn btn-default auth-buttons">Sign In</button>
            {/* NOTE: change the element so it doesn't look like I'm going to submit something. */}
            <hr></hr>
            <button className="btn btn-default auth-buttons">
              <Link to="/signup">Sign up</Link>
            </button>
          </form>
        </div>
    );
  }
}

export default LogInForm;
