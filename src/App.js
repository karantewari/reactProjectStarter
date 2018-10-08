import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:'asdas', name: "Karan" },
      { id:'qweqw', name: "Anand" },
      { id:'zxcxzc', name: "Vritul" }
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

  chnagedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    });
  }

  togglePersonHandler = () => {
    const doesShow  = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({
      persons:person
    })
  }

  render() {

    let person = null;
    if(this.state.showPersons){
      person = (
        <div>
        {this.state.persons.map((person,index) => {
          return <Person 
          name={person.name} 
          click={()=> this.deletePersonHandler(index)}
          key={person.id}
          changed = {(event) => this.chnagedHandler(event, person.id )}
          />
        })}
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
