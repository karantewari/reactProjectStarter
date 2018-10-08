import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Karan" },
      { name: "Anand" },
      { name: "Vritul" }
    ],
    showPersons : false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName },
        { name: "Andy" },
        { name: "Tullu" }
      ]
    })
  }

  chnagedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Karan" },
        { name: event.target.value },
        { name: "Tullu" }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow  = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    let person = null;
    if(this.state.showPersons){
      person = (
        <div>
          <Person name={this.state.persons[0].name} />
          <Person name={this.state.persons[1].name} click={() => this.switchNameHandler('Izaki!!')} changed={this.chnagedHandler} />
          <Person name={this.state.persons[2].name}>My Hobies : Racing</Person>
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button onClick={this.togglePersonHandler}>Swtich Name</button>
        {person}
      </div>
    );
  }
}

export default App;
