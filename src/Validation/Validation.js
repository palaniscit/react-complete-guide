import React from 'react';

const validation = (props) => {
    let validationMessage = "Text too short!";
    let style = {
        color: 'red'
    };
    if(props.freeFlowText && props.freeFlowText.length >= 5) {
        validationMessage = "Text long enough!";
        style = {
            color: 'green'
        }
    }

    return (
        <div style={style}>{validationMessage}</div>
    )
}

export default validation;