import React from "react"
import { useState } from "react"

export default function Welcome() {

    const [user, setUser] = useState("Chandrakant Bhosale");

    const changeUser = () => {
    setUser("Rohit Sharma");
  };
    return (
        <div>
        <p>Implement the useState in both functional component and class component - 150</p>
            <h2>Welcome, To UseState {user} !</h2>
            <button onClick={changeUser}>Change Name</button>
        </div>
    )
}