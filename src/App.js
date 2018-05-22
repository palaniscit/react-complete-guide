import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Palani", age: 30},
      {name: "Sangavi", age: 20},
      {name: "Yalini", age: 1}
    ]
  }

  switchPersonHandler = () => {
    console.log('Button clicked.');
  }

  render() {
    return (
      <div className="App">
          <h1>I am a React Application!</h1>
          <button onClick={this.switchPersonHandler}>Switch Person</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I am naughty!</Person>
      </div>
    );
  }
}

export default App;
