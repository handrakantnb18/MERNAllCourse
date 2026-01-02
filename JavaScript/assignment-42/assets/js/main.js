
/* object function */
// Object.keys()  --> return key of an object  

const user = {firstName: "chandrakant", lastName : "bhosale", city : "pune"};

console.log(user);

// Object.values()  --> returns values of object 

const val = {firstName: "sachin", lastName : "Tendulkar", city : "mumbai"};

console.log(Object.values(val));

// Object.entries() --> returns the key-value pairs 
const ent = {firstName: "Rohit", lastName : "Sharma", city:"Pune"};

console.log(Object.entries(ent));

// Object.assign() --> copies properties from one object to anather 
const asi = {firstName: "virat", lastName : "Kohali", city:"banglore"};

var cricketer={}
Object.assign(cricketer, asi);
console.log(cricketer);

// Object.freeze() -->  prevents modifications to an object 
const frz = {firstName: "MS", lastName : "Dhoni", city:"Chennai"};

// Object.freeze(frz);
Object.freeze(frz);
frz.age= 28;
console.log(frz);

// Object.seal()  --> allows modifing but not adding/removing properties
const sel = {firstName: "Shubham", lastName : "Shinde", city:"Sangli"};

Object.seal(sel);
sel.firstName = "Ram";
sel.age = "25";

console.log(sel);

