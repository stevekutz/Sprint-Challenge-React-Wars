import React, { Component } from 'react';
import DogList from './components/DogList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    // this.getCharacters('https://dog.ceo/api/breeds/list/all');
    this.getCharacters('https://dog.ceo/api/breeds/image/random/10');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

// yes this was cheating
// onClick = {() => window.location.reload()}

// this
// onClick = { () => this.getCharacters('https://dog.ceo/api/breeds/image/random/10')}
// onClick = { () => this.componentDidMount()}

  render() {
    return (
      <div className="App">

        <h1 className = "header_h1">  10 cute dogs </h1>
        <button
          onClick = { () => this.getCharacters('https://dog.ceo/api/breeds/image/random/10')}
            > refresh for more cuteness </button>
        <div className = "main_dogList">
          <DogList cutedogs = {this.state.dogs}/>

        </div>

      </div>
    );
  }
}

export default App;
