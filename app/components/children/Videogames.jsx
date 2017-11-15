import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Header from './Header.jsx';
import helpers from '../utils/helpers';

class Videogames extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   userinput: []
    // }

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
    // TODO: change argument below to read from database
    this.props.setWord('hello');
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e) {
    console.log('event', e.key);
    this.props.setLetter(e.key);
  }

  render() {
    // NOTE: set conditionals/code here!
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default Videogames;
