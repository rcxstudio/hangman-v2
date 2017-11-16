import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import HeaderGames from './HeaderGames.jsx';
import GuessArea from './GuessArea.jsx';
import Streak from './Streak.jsx';
import helpers from '../utils/helpers';

class Videogames extends React.Component {
  constructor(props){
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
    // TODO: change argument below to read from database
    this.props.setWord('hello');
    this.props.setTheme('videogames');
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  componentDidUpdate() {
    console.log('ppppppp',this.props.wordToGuess)
  }

  // NOTE: event parameter is default, because it's handleKeyPress function
  // is being used as a callback to an event listener.
  handleKeyPress(e) {
    console.log('event', e.key);
    this.props.setLetter(e.key);
  }

  render() {
    // NOTE: set conditionals/code here!
    // TODO: pick videogame theme background image
    return (
      <div>
        <HeaderGames />
        <GuessArea
          wordToGuess = {this.props.wordToGuess}
        />
        <Streak
          winStreak = {this.props.winStreak}
        />
      </div>
    )
  }
}

export default Videogames;
