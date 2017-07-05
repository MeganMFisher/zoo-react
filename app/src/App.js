import React, { Component } from 'react';
import Species from './Species';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      species: [
        {
          name: 'Elephant',
          status: 'Hungry'
        },
        {
          name: 'Mongoose',
          status: 'Hungry'
        },
        {
          name: 'Shark',
          status: 'Hungry'
        }
      ],

      newSpecies: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.addSpecies = this.addSpecies.bind(this)
    this.feedSpecies = this.feedSpecies.bind(this)

  }


  handleChange(event) {
      this.setState({ 
        newSpecies: event.target.value
      })
    }

  addSpecies() {

    const newSpecies = {
        name: this.state.newSpecies,
        status: 'Hungry'
    }

    this.setState({
      species: [...this.state.species, newSpecies]
    })
  }

  feedSpecies(name) {

    const species = this.state.species;

    for(let i = 0; i < species.length; i++) {
      if(species[i].name === name) {
        species[i].status = 'Happy'
      }
    }

    this.setState({
      species: species
    })
  }

  //   feedSpecies(name){
  //   const {species} = this.state
  //    species.map(e => { if(e.name === name) e.status = 'Happy' })
  //   this.setState({species})
  // }

  render() {

    const speciesArray = this.state.species.map((species, i ) => {
      return <Species 
            key={i} 
            name={species.name} 
            status={species.status} 
            action={this.feedSpecies} //action can be any word
            />
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
