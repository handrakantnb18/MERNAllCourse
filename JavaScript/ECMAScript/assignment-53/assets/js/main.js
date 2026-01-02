// Template Literals ()

const user = {firstName: "chandrakant", lastName: "bhosale"};
const {firstName, lastName} = user;

console.log(user);


const fname = "Virat";
const lname = "Kohli";
const age = 33;

const message = `My name is ${fname} ${lname} and I am ${age} years old.`;
console.log(message);


function india(fName, lName, age){
    return `My name is ${fName} ${lName} and I am ${age} years old.`;
}

console.log(india("Virat", "Kohli", 32));
//console.log(india);
