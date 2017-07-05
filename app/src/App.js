import React, { Component } from 'react';
import Species from './Species';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      species: [
        'Elephant', 
        'Leopard', 
        'Platypus', 
        'Shark'
      ]
    }

  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-Zoo</h2>
        </div>
        <p className="App-intro">
          All The Animals
        </p>


        {/*{ this.state.species }*/}

        <Species  name={this.state.species[0]}/>
        <Species  name={this.state.species[1]}/>

        <div>
          <input />
          <button> Add Species </button>
        </div>

      </div>
    );
  }
}

export default App;
