import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import helpers from './utils/helpers'; //TODO: check if this is required here.
import LogInForm from './children/LogIn.jsx';
import SignUpForm from './children/SignUp.jsx';
import Guest from './children/Guest.jsx';
import Dashboard from './children/Dashboard.jsx';
import LogOut from './children/Dashboard.jsx';
// NOTE: {} indicate named exports; without {}, it indicates the export default

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      loggedIn: false
    }

    //NOTE: you need to bind the methods here, so when they reference this in the other files, it comes back to this area...not confusing at all, right?
    this.setUsername = this.setUsername.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.setMsgs = this.setMsgs.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('Main is updated.', this.state)
  }

  setUsername(receivedUsername) {
    this.setState({username: receivedUsername})
  }

  setEmail (receivedEmail) {
    this.setState({email: receivedEmail})
  }

  setPassword (receivedPassword) {
    this.setState({password: receivedPassword})
  }

  setLoggedIn (receivedLoggedIn) {
    this.setState({loggedIn: receivedLoggedIn})
  }

  setMsgs (receivedMsgs) {
    this.setState({messages: receivedMsgs})
  }

  // setShowDash(receivedDash) {
  //   this.setState({showDash: receivedDash});
  // }

  render () {
    return(
      <div>
        <img id="background-image" src="./images/landscape-web.jpg" alt="landscape image" />
        <main>
          <Switch>
            <Route exact path="/" render={() => (
              this.state.loggedIn ? (<Redirect to="/dashboard" />) : (<Redirect to="/login" />)
            )} />
            <Route path="/login" render={() => (
              this.state.loggedIn ? (<Redirect to="/dashboard" />) :
              (<LogInForm
                username = {this.state.username}
                email = {this.state.email}
                password = {this.state.password}
                setUsername = {this.setUsername}
                setEmail = {this.setEmail}
                setPassword = {this.setPassword}
                setLoggedIn = {this.setLoggedIn}
                setMsgs = {this.setMsgs}
              />)
            )} />
            <Route path="/signup" render={() => (
              this.state.loggedIn ? (<Redirect to="/dashboard" />) :
              <SignUpForm
                username = {this.state.username}
                email = {this.state.email}
                password = {this.state.password}
                setUsername = {this.setUsername}
                setEmail = {this.setEmail}
                setPassword = {this.setPassword}
                setLoggedIn = {this.setLoggedIn}
              />
            )} />
            <Route path="/dashboard" render={() => (
              <Dashboard
                username = {this.state.username}
                email = {this.state.email}
                loggedIn = {this.state.loggedIn}
                showDash = {this.state.showDash}
                setLoggedIn = {this.setLoggedIn}
                setMsgs = {this.setMsgs}
              />
            )} />
            <Route path="/logout" render={() => (
              <LogOut />
            )} />
            <Route path="/guest" render={() => (
              <Guest />
            )} />
          </Switch>
        </main>
      </div>
    )};
}

export default Main;
