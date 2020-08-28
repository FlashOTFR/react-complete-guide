import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './style.css';

class Person extends Component {

    state = {

    }

    render() {
    return (

        <div className={classes.Person}>
                <h1 onClick={this.props.click}>I am {this.props.name}! I am {this.props.age} years old!</h1>
                <h1>{this.props.children}</h1>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
        </div>

    );
    }
}

export default Person;