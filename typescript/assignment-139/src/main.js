
"use strict";

class Person {
    // private firstName;
    // public lastName;


    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    describe() {
        return `My name is ${this.firstName}${this.lastName}`;
    }
}

const personObj = new Person("Rohit ", "Sahrma");
console.log(personObj.describe());



// var welcome = function (firstName) {
//     console.log("Rohit, ".concat(firstName, " Sharma"));
// };
// welcome("Indian cricket team captain...!!!");
