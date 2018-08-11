import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

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
    showPersons: false,
    freeFlowText: ""
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

  freeFlowTextChangeHandler = (event) => {
    this.setState({
      freeFlowText: event.target.value
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

  deleteCharHandler = (charIndex) => {
    let freeFlowTextArr = this.state.freeFlowText.split('');
    freeFlowTextArr.splice(charIndex, 1);

    this.setState({
      freeFlowText: freeFlowTextArr.join('')
    })
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

    let freeFlowTextLength = null;
    if(this.state.freeFlowText && this.state.freeFlowText.length > 0) {
      freeFlowTextLength = (
        <p>Length of Free flow text: {this.state.freeFlowText.length}</p>
      );
    }

    let charComponents = null;
    if(this.state.freeFlowText) {
      let freeFlowTextArr = this.state.freeFlowText.split('');
      charComponents = (
        <div>
          {freeFlowTextArr.map((character, index) => {
            return <CharComponent 
              character={character}
              click={this.deleteCharHandler.bind(this,index)}></CharComponent>
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

          <label>Free flow text: </label>
          <input type="text" value={this.state.freeFlowText} onChange={this.freeFlowTextChangeHandler}/>
          {freeFlowTextLength}
          <Validation freeFlowText={this.state.freeFlowText}></Validation>

          {charComponents}
      </div>
    );
  }
}

export default App;
