import React from "react";
import Welcome from "./Welcome";

export default function ParentComponent() {
    const firstName = "Rohit";
    const lastName = "sharma";
    const age = 33;
    const proffession= "cricket";

    

    return (
        <div>
            <h1>This is the Parent Component</h1>
            <Welcome firstName={firstName} lastName={lastName} age= {age} proffession= {proffession}/>
        </div>
    );
}