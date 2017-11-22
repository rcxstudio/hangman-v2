import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import HeaderGames from './grandchildren/HeaderGames.jsx';
import GuessArea from './grandchildren/GuessArea.jsx';
import Streak from './grandchildren/Streak.jsx';
import Guesses from './grandchildren/Guesses.jsx';
import LetterBank from './grandchildren/LetterBank.jsx';
import helpers from '../utils/helpers';

class Videogames extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  // NOTE: event parameter is default, because it's handleKeyPress function
  // is being used as a callback to an event listener.
  handleKeyPress(e) {
    console.log('event', e.key);

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
                usedLetters = {this.props.letters}
                guessesLeft = {this.props.guessesLeft}
                setTheme = {this.props.setTheme}
                setWord = {this.props.setWord}
                setWordBank = {this.props.setWordBank}
                setLetter = {this.props.setLetter}
                setGuessesLeft = {this.props.setGuessesLeft}
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
              <LetterBank
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
