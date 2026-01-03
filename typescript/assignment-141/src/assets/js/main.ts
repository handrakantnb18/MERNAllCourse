// assignment-140 Implement the custom type and intersect multiple types

type UserType = {
    firstName: string,
    lastName: string,
    age: number,
    country: string
}

type ContactType = {
    mobile: number,
    emailId: string
}

const user: UserType = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    age: 35,
    country:"India"
}


const user1: UserType = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 34,
    country:"India"
}

console.log(user);
console.log(user1)

// import addition, { subtraction } from './utilities.js'

// console.log(addition(3, 5));

// console.log(subtraction(10, 20));

// document.addEventListener("DOMContentLoaded", function() {
//         var rootEle = document.getElementById("root");
//         rootEle?.insertAdjacentText("afterbegin", "Welcome, chandrakant");
// })

// var welcome: string | number = "Hello, Everyone";

// // welcome = 10;

// welcome = 10;

// var abc: string = "typescript"

// console.log(welcome);

// console.log(abc);