import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = ( props ) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved data to cloud!!!')
    // },1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work on useEffect');
    };
  }, []); //Executes first time only

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work on 2nd useEffect');
    };
  }); //Executes first time and every time a person is changed

  let btnClass = '';

  if (props.showPersons){
    btnClass = classes.Red;
  }

  const classesAssigned = [];
  if (props.personsLength <= 2){
    classesAssigned.push(classes.red);
  }
  if (props.personsLength <= 1){
    classesAssigned.push(classes.bold);
  }

  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classesAssigned.join(' ')}>
        This is a paragraph !!!
      </p>
      <button ref={toggleBtnRef} className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
