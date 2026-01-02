// Implement the hasOwn method
// Object.hasOwn() method is a safer and simpler way to check if an object has its own property

// object: The object to check.
// property: The name (string or symbol) of the property.

// .hasOwn() check the value of boolean trur or false
var cricket = {
    firstName : "Smruti",
    lastName : "Mandhana",
    age : 29,
    city : "Sangli"
};

console.log(Object.hasOwn(cricket, "firstName"));
console.log(Object.hasOwn(cricket, "city"));

console.log(Object.hasOwn(cricket, "lname"));

// check the true or folse

const num = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5
};

console.log(Object.hasOwn(num, 1));
console.log(Object.hasOwn(num, 8));

let val = {one : "apple", two : "orange", three : "banana"};
console.log(Object.hasOwn(val, "banana"));