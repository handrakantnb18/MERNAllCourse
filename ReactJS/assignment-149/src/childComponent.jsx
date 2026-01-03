import React from "react";
import Welcome from "./Welcome";

export default function childComponent() {
    const firstName = "Virat";
    const lastName = "Kohli";
    const age = 35;
    const proffession= "cricket";

    

    return (
        <div>
            <h1>This is the Child Component</h1>
            <Welcome firstName={firstName} lastName={lastName} age= {age} proffession= {proffession}/>
        </div>
    );
}