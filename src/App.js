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
      {id: 1, name: "Smith", age: 30},
      {id: 2, name: "John", age: 25},
      {id: 3, name: "Vinay", age: 23}
    ],
    othervalue: "This wont be touched by changing state",
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    //DONT USE THIS: this.state.persons[0].name = "Smithsonian";

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    // const person = Object.assign({}, this.state.persons[personIndex]); Alternative
    this.setState(
      {
        persons: persons
      }
    ) // Will only update the old Persons array with new one and merge the remaining properties !!!
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; Wrong approach as both are referencing to same array. Instead create a copy
    //Two ways
    //const persons = this.state.persons.slice(); Slicing without arguments makes a copy
    const persons = [...this.state.persons]; //Spread Operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1 className="App-title">Hi I am a React App !!!</h1>
        <p className={classes.join(' ')}>
          This is a paragraph !!!
        </p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App !!!'));
  }
}

export default App;
