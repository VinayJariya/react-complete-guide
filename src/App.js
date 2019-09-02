//Using React Hooks
/*
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  // useState return exactly 2 values
  // 1st is the current setState
  // 2nd is a function to change current state
  const [ personsState, setPersonsState ] = useState({
    persons : [
      {name: "Smith", age: 30},
      {name: "John", age: 25},
      {name: "Vinay", age: 23}
    ],
  }
);
  //Multiple different states can exist by using Hooks
  const [ otherState, setOtherState ] = useState("This is other state")

  const switchNameHandler = (newName) => {
    //DONT USE THIS: this.state.persons[0].name = "Smithsonian";
    setPersonsState({
      persons: [
        {name: newName, age: 30},
        {name: "John", age: 25},
        {name: "Vinay", age: 24}
        ]
    }) // Will overwrite the old Persons array with new one!!!
  }

  return (
    <div className="App">
      <h1 className="App-title">Hi I am a React App !!!</h1>
      <p className="App-intro">
        This is a paragraph !!!
      </p>
      <button onClick={() => switchNameHandler("Sam")}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this,"Smithsonian")}/>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}/>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}>
        My Hobby is coding !!!
      </Person>
    </div>
  );
  //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App !!!'));
}

export default App;
 */
//Using class component instead of hooks

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
    othervalue: "This wont be touched by changing state",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //DONT USE THIS: this.state.persons[0].name = "Smithsonian";
    this.setState(
      {
        persons: [
          {name: newName, age: 30},
          {name: "John", age: 25},
          {name: "Vinay", age: 24}
        ]
      }
    ) // Will only update the old Persons array with new one and merge the remaining properties !!!
  }

  nameChangedHandler = (event) => {
    //DONT USE THIS: this.state.persons[0].name = "Smithsonian";
    this.setState(
      {
        persons: [
          {name: event.target.value, age: 30},
          {name: "John", age: 25},
          {name: "Vinay", age: 24}
        ]
      }
    ) // Will only update the old Persons array with new one and merge the remaining properties !!!
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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
        <h1 className="App-title">Hi I am a React App !!!</h1>
        <p className="App-intro">
          This is a paragraph !!!
        </p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        { this.state.showPersons === true ?
          <div >
            <Person
              name={this.state.persons[0].name}
              age = {this.state.persons[0].age}
              click={this.switchNameHandler.bind(this,'Sam')}
              changed={this.nameChangedHandler}/>
            <Person
              name={this.state.persons[1].name}
              age = {this.state.persons[1].age}/>
            <Person
              name={this.state.persons[2].name}
              age = {this.state.persons[2].age}>
              My Hobby is coding !!!
            </Person>
          </div> : null
        }
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App !!!'));
  }
}

export default App;
