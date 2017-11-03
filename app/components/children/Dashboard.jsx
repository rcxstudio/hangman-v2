import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Header from './Header.jsx';
import PublicPanel from './grandchildren/PublicPanel.jsx';
import PrivatePanel from './grandchildren/PrivatePanel.jsx';
import MsgInput from './grandchildren/MsgInput.jsx';

import helpers from '../utils/helpers';

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      message: []
    }

    this.setMessage = this.setMessage.bind(this);
  }

  componentDidMount() {
    console.log('username from main', this.props.username)

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('this.state.message', this.state.message);
  }

  setMessage(receivedMsg) {
    console.log('at dashboard', receivedMsg);
    let tempMsgArr = this.state.message.slice();
    tempMsgArr.push(receivedMsg);
    this.setState({message: tempMsgArr});
  }

  render() {
    // set conditionals here!
    if (this.props.loggedIn) {
      return (
        <div>
          <Header
            username = {this.props.username}
            logout = {this.props.setLoggedIn}
          />

          <section className="container"id="render-msg-wrap">
            <div className="row">
              <div className="col-md-2" />
              <PublicPanel
                username = {this.props.username}
              />

              <PrivatePanel
                username = {this.props.username}
              />
              <div className="col-md-2" />

              <div className="row">
                <MsgInput
                  setMessage = {this.setMessage}
                />

              </div>
            </div>
          </section>
        </div>
    )}

    else return (<Redirect to="/logout" />);
  }
}

export default Dashboard;
