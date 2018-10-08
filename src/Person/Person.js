import React from 'react';

const Person  = (props) => {
    return (
    <div>
        <h3 onClick={props.click}>Im a Person named {props.name}</h3>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default Person;