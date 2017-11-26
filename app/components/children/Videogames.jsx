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
                letters = {this.props.letters}
                lettersClickCount = {this.props.lettersClickCount}
                wordToGuess = {this.props.wordToGuess}
                wrongLetters = {this.props.wrongLetters}
                guessesLeft = {this.props.guessesLeft}
                setWord = {this.props.setWord}
                setWordBank = {this.props.setWordBank}
                setLetter = {this.props.setLetter}
                setWrongLetter = {this.props.setWrongLetter}
                setLettersClickCount = {this.props.setLettersClickCount}
                setGuessesLeft = {this.props.setGuessesLeft}
                addWinStreak = {this.props.addWinStreak}
                gameOver = {this.props.gameOver}
                startGame = {this.props.startGame}
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
                wrongLetters = {this.props.wrongLetters}
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Videogames;
