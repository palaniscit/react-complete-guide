import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {key: "asdf", name: "Palani", age: 30},
      {key: "qwer", name: "Sangavi", age: 20},
      {key: "zcxv", name: "Yalini", age: 1}
    ],
    userNames: [
      {name: "Palani"},
      {name: "Sangavi"}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.key === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    });
  }

  userNameChangeHandler = (event) => {
    this.setState({
      userNames: [
        {name: event.target.value},
        {name: "Sangavi"}
      ]
    });
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    //const localPersons = this.state.persons.slice();
    const localPersons = [...this.state.persons];
    localPersons.splice(personIndex, 1);
    this.setState({persons: localPersons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.key}
              changed={(event) => this.nameChangeHandler(event, person.key)}></Person>
          })}
        </div>
      );
    }

    return (
      <div className="App">
          <h1>I am a React Application!</h1>
          <button 
            style={style}
            onClick={this.togglePersons}>Toggle Persons</button>
          {persons}
          <UserInput name={this.state.userNames[0].name} changed={this.userNameChangeHandler}></UserInput>
          <UserOutput userName={this.state.userNames[0].name}>I am paragraph #1</UserOutput>
          <UserOutput userName={this.state.userNames[1].name}>I am paragraph #2</UserOutput>
      </div>
    );
  }
}

export default App;
