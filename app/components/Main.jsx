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

    }
  }

  render () {
    return(
      <div>
        <img id="background-image" src="./images/landscape-web.jpg" alt="landscape image" />
        <main>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/dashboard/guest/themes" />)}
            />
          <Route path="/dashboard/guest/themes" render={() => (
            <Guest

            />
            )} />
          </Switch>
        </main>
      </div>
    )};
}

export default Main;
