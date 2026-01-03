import React from "react";

export default class Welcome extends React.Component {
    constructor(){
        super();
  }

  firstName = "Chandrakant"

  userName = (name) => `Hello, ${name}`

  fruits = ["Apple", "Banana", "Mango"];

  welcome() {
    return `welcome to ReactJs ${this.firstName}`;
  }

  render() {
    return (
     <div>
   <h1>Welcome to React Js, functional component : {this.firstName}</h1>
   <h1>Welcome, {this.firstName}</h1>
      <h3>Hello, Chandrakant (userName)</h3>

      // ternary name
      <p>{ this.firstName ? "first Name is correct" : "welcome..."}</p>

      // Map() render list
      <ul>
        {this.fruits.map((fruit, index) =>
        {
          <li key={index}>{fruit}</li>
        })}
      </ul>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officiis minima natus in iste eaque dolorum
     sint laborum optio ratione. Est harum tempore esse deserunt! Doloribus quaerat cupiditate nobis totam!</p>
     </div>
   )
  }
}
