import React from 'react';

const userinput = (props) => {
    return (
        <div>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
}

export default userinput;