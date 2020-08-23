import React from 'react';
// import './style.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 20%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 2%;
    text-align: center;
    }

    @media (min-width: 500px) {
        width: 450px;
    }`

const Person = (props) => {

    return (

        // <div className="person-box">
            <StyledDiv>
                <h1 onClick={props.click}>I am {props.name}! I am {props.age} years old!</h1>
                <h1>{props.children}</h1>
                <input type='text' onChange={props.changed} value={props.name}/>
            </StyledDiv>
            // </div>

    );
}

export default Person;