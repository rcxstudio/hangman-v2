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
      lettersClickCount: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
      },
      guessesLeft: 6,
      winStreak: 0,
      secretCode: []
    }

    this.setLetter = this.setLetter.bind(this);
    this.setWrongLetter = this.setWrongLetter.bind(this);
    this.setLettersClickCount = this.setLettersClickCount.bind(this);
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

  setLettersClickCount(letterPressed) {
    const lettersClickCountCopy = this.state.lettersClickCount;
    lettersClickCountCopy[letterPressed]++;
    this.setState({ lettersClickCount: lettersClickCountCopy})
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
                lettersClickCount = {this.state.lettersClickCount}
                wordToGuess = {this.state.wordToGuess}
                wordBank = {this.state.wordBank}
                wrongLetters = {this.state.wrongLetters}
                winStreak = {this.state.winStreak}
                guessesLeft = {this.state.guessesLeft}
                setLetter = {this.setLetter}
                setWrongLetter = {this.setWrongLetter}
                setLettersClickCount = {this.setLettersClickCount}
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
