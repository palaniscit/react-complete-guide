import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <input type="text" onChange={props.changed} value={props.name}/>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!{props.children}</p>
        </div>
    )
}

export default person;