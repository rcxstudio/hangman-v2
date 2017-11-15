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
      wrongLetters:[],
      correctLetters: [],
      guessesLeft: 6,
      winStreak: 0,
      secretCode: []
    }

    this.setLetter = this.setLetter.bind(this);
  }
  // React Lifecycle functions


  // Custom functions

  setLetter(guessedLetter) {
    console.log(guessedLetter);
    console.table(this.state.letters);
    //TODO: find a way to get the guessedLetter to indicate the actual letter
    console.log(this.state.letters.guessedLetter);
    this.setState({ letters: {guessedLetter: true } })
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
              />
            )} />
          </Switch>
        </main>
      </div>
    )};
}

export default Main;
