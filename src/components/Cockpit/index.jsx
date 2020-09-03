import React, { useEffect } from 'react';
import classes from './style.css';

const Cockpit = (props) => {
    
  useEffect(() => {
    console.log('[Cockpit.jsx] useEffect');
    const timer = setTimeout(() => {
      alert('saved data to cloud');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.jsx] cleanup work in useeffect');
    }
  }, []);



    const assignedClasses = [];

    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className = {assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className = {btnClass}
                onClick = {props.clicked}>
            Toggle Persons
            </button>
        </div>
     );
}
 
export default React.memo(Cockpit);