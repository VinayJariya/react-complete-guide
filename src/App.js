import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: "Smith", age: 30},
      {name: "John", age: 25},
      {name: "Vinay", age: 23}
    ],
    othervalue: "This wont be touched by changing state"
  }

  switchNameHandler = () => {
    //DONT USE THIS: this.state.persons[0].name = "Smithsonian";
    this.setState(
      {
        persons: [
          {name: "Smithsonian", age: 30},
          {name: "John", age: 25},
          {name: "Vinay", age: 24}
        ]
      }
    ) // Will only update the old Persons array with new one and merge the remaining properties !!!
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hi I am a React App !!!</h1>
        <p className="App-intro">
          This is a paragraph !!!
        </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}> My Hobby is coding !!!</Person>
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App !!!'));
  }
}

export default App;
