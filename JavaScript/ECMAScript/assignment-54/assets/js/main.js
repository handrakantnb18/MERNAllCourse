// Implement the array and 

const colors =['red', 'green', 'blue'];

const [ , second, third] = colors;
console.log(second);
console.log(third);

// object destructing

const user = {
    fname: "virat",
    lname: "kohli",
    age: 33,
    city: "Bangalore"
};

const{fname, lname, age} =user;
console.log(fname);
console.log(lname);
console.log(age);
