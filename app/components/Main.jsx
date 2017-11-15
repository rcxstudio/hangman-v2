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
        fantasy: false,
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
      usedWords: [],
      wrongLetters:[],
      correctLetters: [],
      guessesLeft: 6,
      winStreak: 0,
      secretCode: []
    }

    this.setLetter = this.setLetter.bind(this);
    this.setWord = this.setWord.bind(this);
  }
  // React Lifecycle functions
  componentDidUpdate() {
    console.log(this.state.wordToGuess);
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

  setWord(word) {
    this.setState({wordToGuess: word})
  }

  render() {
    return(
      <div>
        <img id="background-image" src="./images/landscape-web.jpg" alt="landscape image" />
        <main>
          <Switch>
            <Route exact path="/" component={Themes} />
            <Route path="/videogames" render={() => (
              <Videogames
                themes = {this.state.themes}
                letters = {this.state.letters}
                setLetter = {this.setLetter}
                setWord = {this.setWord}
              />
            )} />
          </Switch>
        </main>
      </div>
    )};
}

export default Main;
