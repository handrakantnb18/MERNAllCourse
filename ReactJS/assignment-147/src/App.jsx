// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const name = `chandrakant`;

  const welcome = (userName) => `Hello, ${userName}`;

  // const isLoggedIn = true;

  // const fruit = [`Apple`, "Banana", "Cherry"];

  return (
    <> 
      <div>
        <h1>{name}</h1>

        <p>{ welcome(name)}</p>
      </div>
      
    </>
  )
}

export default App
