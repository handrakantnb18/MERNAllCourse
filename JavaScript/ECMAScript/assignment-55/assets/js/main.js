// The rest operators  (...num)
// Rest collects values into an array.

function sum(...nums){
    return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 12, 13));

const user = {name: "virat", age: 33, city: "bangalore"};
const {name, ...rest} = user;

console.log(name);
console.log(rest);

// The spread operators
// Spread expands or unpacks values from arrays or objects.
// to copy, merge, or expand arrays or objects.

const index1 = [1, 2, 3];
const index2 = [4, 5, 6];

const combined = [...index1, ...index2];
console.log(combined);

const friuts1 = ["banana", "mango", "orange"];
const friuts2 = [...friuts1, "apple", "vater melan", "stroberi", "leman"];
const fruits3 =[...friuts2, "graphs", "jamun"];

console.log(fruits3);
