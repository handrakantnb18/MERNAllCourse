// Set up a frontend project using following:

// npm init - to create a frontend typescript based project
// npm install typescript --save-dev - to install typescript
// as dev dependancy
// npx tsc --init - it creates a tsconfig.json - its a 
// configuration file for how to build / transpile the project - target, module, outDir, rootDir, strict

"use strict";

class Person {
    public firstName;
    public lastName;


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


// const welcome = (firstName: string): void => {
//     console.log(`Rohit, ${firstName} Sharma`);
// };

// welcome("Indian cricket team captain...!!!");
