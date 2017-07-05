import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Species from './Species';

class App extends Component {
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
        <Species />
      </div>
    );
  }
}

export default App;
