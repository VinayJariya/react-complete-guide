import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = ( props ) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('First time rendering !!!')
    },1000)
  }, []); //Executes first time only

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    setTimeout(() => {
      alert('Update happened on person!!!')
    },1000);
    return () => {
      console.log('[Cockpit.js] cleanup work on 2nd useEffect');
    };
  }, [props.persons]); //Executes first time and every time a person is changed

  let btnClass = '';

  if (props.showPersons){
    btnClass = classes.Red;
  }

  const classesAssigned = [];
  if (props.persons.length <= 2){
    classesAssigned.push(classes.red);
  }
  if (props.persons.length <= 1){
    classesAssigned.push(classes.bold);
  }

  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classesAssigned.join(' ')}>
        This is a paragraph !!!
      </p>
      <button className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
