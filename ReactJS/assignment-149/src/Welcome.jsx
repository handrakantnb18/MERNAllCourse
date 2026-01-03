import React from "react";

export default function ChildComponent(props) {
    return (
        <div>
            
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>age: {props.age}</p>
            <p>proffession : {props.proffession}</p>
        </div>
    );
}
