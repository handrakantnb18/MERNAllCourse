
//Implement all the features of ES10

// Array.prototype.flat() --> 
// .flat() method flattens nested arrays into a single-level array
const index = [1, 2 [3, 4, 5[6, 7]]];

console.log(index.flat());
console.log(index.flat(2));
console.log(index.flat(Infinity));

// bject.fromEntries() --> 
// Object.fromEntries() method transforms arrays into objects.
const entries = [['name', 'smith'],['age', 55]];

const obj = Object.fromEntries(entries);
console.log(obj);
