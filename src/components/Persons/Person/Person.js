import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass'

class Person extends Component{

  constructor(props){
    super(props) ;
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    // this.inputElement.focus(); Way 1 to use ref
    this.inputElementRef.current.focus();
  }

  render(){
    console.log('[Person.js] is rendering...');
    return(
      <Aux>
        {/* <div className={classes.Person}> */}
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => {this.inputElement = inputEl}} Way 1 to use ref
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
        {/* </div> */}
      </Aux>
        );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
