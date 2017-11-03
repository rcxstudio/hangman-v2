import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');

import helpers from '../utils/helpers.js';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: '',
      newEmail: '',
      newPassword: ''
      // NOTE: messages shoudld be created in Dashboard
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var that = this;
    if (event.target.id === 'username') {
      this.setState({newUsername: event.target.value});
    }
    else if (event.target.type === 'email') {
      this.setState({newEmail: event.target.value});
    }
    else if (event.target.type === 'password') {
      let pw = event.target.value;
      bcrypt.hash(pw, 8, (err, hash) => {
        if (err) throw err;
        console.log(hash);
        // Store hash in your password DB.
        that.setState({newPassword: hash});
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // Creates user on submit and sends to route
    let newUser = {
      username: this.state.newUsername,
      email: this.state.newEmail,
      password: this.state.newPassword,
      loggedIn: true
    };
    this.props.setUsername(newUser.username);
    this.props.setEmail(newUser.email);
    this.props.setPassword(newUser.password);
    this.props.setLoggedIn(newUser.loggedIn);

    helpers.createUser(newUser)
    .then(res => {
      console.log('from signup', res);
      if (res.data === 'authorized') {
        this.props.setLoggedIn(true);
        // resetting states
        this.setState({
          newUsername: '',
          newEmail: '',
          newPassword: ''
        });
      }
    });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col-md-4 col-md-offset-4" id="signup-wrap">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-default auth-buttons">Create Account</button>
          <hr></hr>
          <button className="btn btn-default auth-buttons">
            <Link className="login" to="/login">Log In</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
