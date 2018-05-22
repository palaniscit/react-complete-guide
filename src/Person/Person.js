import React from 'react';

const person = (props) => {
    return (
        <p>I am {props.name} and I am {props.age} years old!{props.children}</p>
    )
}

export default person;