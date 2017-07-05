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
        'Shark',
        'Mongoose'
      ],

      newSpecies: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.addSpecies = this.addSpecies.bind(this)

  }


  handleChange(event) {
      this.setState({ 
        newSpecies: event.target.value
      })
    }

  addSpecies() {
    const newSpecies = this.state.newSpecies;

    this.setState({
      species: [...this.state.species, newSpecies]
    })
  }

  render() {

    const speciesArray = this.state.species.map((name, i ) => {
      return <Species key={i} name={name} />
    })


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-Zoo</h2>
        </div>
        <p className="App-intro">
          All The Animals
        </p>

        {/*<Species  name={this.state.species[0]}/> */}

        {speciesArray}

        <div>
          <input onChange={this.handleChange} value={this.state.newSpecies}/>
          <button onClick={this.addSpecies}> Add Species </button>
        </div>

      </div>
    );
  }
}

export default App;
