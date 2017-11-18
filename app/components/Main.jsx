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
      wordBank: [],
      usedWords: [],
      wrongLetters:[],
      correctLetters: [],
      guessesLeft: 6,
      winStreak: 0,
      secretCode: []
    }

    this.setLetter = this.setLetter.bind(this);
    this.setWordBank = this.setWordBank.bind(this);
    this.setWord = this.setWord.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }
  // React Lifecycle functions
  componentDidUpdate() {
    console.log(this.state.wordToGuess);
    console.table(this.state.themes);
  }

  // Custom functions
  setLetter(guessedLetter) {
    console.log(guessedLetter);

    if (guessedLetter in this.state.letters) {
      const updatedLetters = this.state.letters;
      updatedLetters[guessedLetter] = true;
      console.table(updatedLetters);
      // NOTE: you can use variables as keys if you use bracket notation
      this.setState({ letters: updatedLetters })
    }
  }

  setTheme(selectedTheme) {
    let updatedTheme = {
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
      default:
        updatedTheme.fantasy = true;
        this.setState({ themes: updatedTheme })
        break;
    }
  }

  setWordBank(wordBankReceived) {
    this.setState({ wordBank: wordBankReceived })
  }

  setWord(word) {
    this.setState({ wordToGuess: word })
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
                winStreak = {this.state.winStreak}
                guessesLeft = {this.state.guessesLeft}
                setLetter = {this.setLetter}
                setWordBank = {this.setWordBank}
                setWord = {this.setWord}
                setTheme = {this.setTheme}
              />
            )} />
          </Switch>
        </main>
      </div>
    )};
}

export default Main;
