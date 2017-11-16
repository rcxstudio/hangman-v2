import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import helpers from '../utils/helpers.js';

class GuessArea extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   currentUser: ''
    // }
    //
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('GRANDKID on mount!', this.props.wordToGuess)
  }

  componentDidUpdate() {
    console.log('GRANDKID on update!', this.props.wordToGuess)
  }

  render() {
    // TODO: Set a variable here so underscores can replace the word to guess
    return (
      <div className="container">
        <section className="row">
          <div className="col-md-12 text-center">
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h3 className="panel-title ">Hidden Word</h3>
              </div>
              <div className="panel-body">
                _____ _____ ______ _____
              </div>
            </div>
          </div>
        </section>
      </div>
  )}
}

export default GuessArea;
