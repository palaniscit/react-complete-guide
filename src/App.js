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

  switchPersonHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: "Sangavi", age: 20},
        {name: "Yalini", age: 1}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Palani", age: 30},
        {name: event.target.value, age: 20},
        {name: "Yalini", age: 1}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
          <h1>I am a React Application!</h1>
          <button 
            style={style}
            onClick={this.switchPersonHandler.bind(this, "Palaniyappan")}>Switch Person</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}></Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchPersonHandler.bind(this, "Palani!")}
            changed={this.nameChangeHandler}></Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>I am naughty!</Person>
      </div>
    );
  }
}

export default App;
