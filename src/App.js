import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hi I am a React App !!!</h1>
        <p className="App-intro">
          This is a paragraph !!!
        </p>
        <Person name="Smith" age = "30"/>
        <Person name="John" age = "25"/>
        <Person name="Vinay" age = "23"> My Hobby is coding !!!</Person>
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App !!!'));
  }
}

export default App;
