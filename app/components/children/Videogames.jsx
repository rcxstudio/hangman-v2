import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Header from './Header.jsx';
import helpers from '../utils/helpers';

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userinput: []
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
    // NOTE: set conditionals/code here!
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
    )
  }
}

export default Dashboard;
