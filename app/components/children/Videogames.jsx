import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import HeaderGames from './grandchildren/HeaderGames.jsx';
import GuessArea from './grandchildren/GuessArea.jsx';
import Streak from './grandchildren/Streak.jsx';
import Guesses from './grandchildren/Guesses.jsx';
import WordBank from './grandchildren/WordBank.jsx';
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
        <section className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <GuessArea
                wordToGuess = {this.props.wordToGuess}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <Streak
                winStreak = {this.props.winStreak}
              />
            </div>
            <div className="col-md-4 text-center">
              <Guesses
                guessesLeft = {this.props.guessesLeft}
              />
            </div>
            <div className="col-md-4 text-center">
              <WordBank
                letters = {this.props.letters}
              />
            </div>
          </div>
        </section>



      </div>
    )
  }
}

export default Videogames;
