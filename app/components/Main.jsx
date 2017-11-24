import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import helpers from './utils/helpers';
import Themes from './children/Themes.jsx';
import Videogames from './children/Videogames.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: {
        videogames: false,
        sciFi: false,
        fantasy: false
      },
      letters: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
      },
      wordToGuess: '',
      wordBank: {},
      wrongLetters: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
      },
      correctLetters: [],
      guessesLeft: 6,
      winStreak: 0,
      secretCode: []
    }

    this.setLetter = this.setLetter.bind(this);
    this.setWrongLetter = this.setWrongLetter.bind(this);
    this.setWordBank = this.setWordBank.bind(this);
    this.setWord = this.setWord.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setGuessesLeft = this.setGuessesLeft.bind(this);
  }
  // React Lifecycle functions
  componentDidUpdate() {
    console.log(this.state.wordToGuess);
  }

  // Custom functions
  setLetter(guessedLetter) {
    const lettersCopy = this.state.letters;

    lettersCopy[guessedLetter] = true;
    console.log(guessedLetter);
    // NOTE: you can use variables as keys if you use bracket notation
    this.setState({ letters: lettersCopy });
  }

  setWrongLetter(wrongGuess) {
    const wrongLettersCopy = this.state.wrongLetters;
    if (!wrongLettersCopy[wrongGuess] && !this.state.letters[wrongGuess]) {
      wrongLettersCopy[wrongGuess] = true;
    }
    else if (this.state.letters[wrongGuess]) {
      wrongLettersCopy[wrongGuess] = false;
      console.log(wrongGuess);
    }
    // NOTE: you can use variables as keys if you use bracket notation
    this.setState({ wrongLetters: wrongLettersCopy });
  }

  setTheme(selectedTheme) {
    const updatedTheme = {
      videogames: false,
      sciFi: false,
      fantasy: false
    };
    switch(selectedTheme) {
      case 'videogames':
        updatedTheme.videogames = true;
        this.setState({ themes: updatedTheme });
        break;
      case 'sciFi':
        updatedTheme.sciFi = true;
        this.setState({ themes: updatedTheme })
        break;
      case 'fantasy':
        updatedTheme.fantasy = true;
        this.setState({ themes: updatedTheme })
        break;
      default:
        // TODO: find a different way to trigger error message to user
        alert('Sorry, but theme does not exist');
        break;
    }
  }

  setWordBank(wordBankReceived) {
    this.setState({ wordBank: wordBankReceived })
  }

  setWord(word) {
    this.setState({ wordToGuess: word })
  }

  setGuessesLeft(guessesLeftReceived) {
    this.setState({ guessesLeft: guessesLeftReceived })
  }

  render() {
    return(
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Themes} />
            <Route path="/videogames" render={() => (
              <Videogames
                themes = {this.state.themes}
                letters = {this.state.letters}
                wordToGuess = {this.state.wordToGuess}
                wordBank = {this.state.wordBank}
                wrongLetters = {this.state.wrongLetters}
                winStreak = {this.state.winStreak}
                guessesLeft = {this.state.guessesLeft}
                setLetter = {this.setLetter}
                setWrongLetter = {this.setWrongLetter}
                setWordBank = {this.setWordBank}
                setUsedWordsIndex = {this.setUsedWordsIndex}
                setWord = {this.setWord}
                setTheme = {this.setTheme}
                setGuessesLeft = {this.setGuessesLeft}
              />
            )} />
          </Switch>
        </main>
      </div>
    )};
}

export default Main;
