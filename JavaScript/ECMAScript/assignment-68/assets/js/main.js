
// Top-Level await() --> 

// user singel name and id access
async function emp1() {
const user = await fetch(`https://jsonplaceholder.typicode.com/users`);
const data = await user.json(); 
data.forEach(person => {
  console.log('User name:', person.name);
   console.log('User id:', person.id);
});
}
emp1();

// all users are access
async function emp() {
   const empUser = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await empUser.json(); 
console.log('All user name:', data); 
}
emp();

// single user access
async function employee() {
   const empUser1 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data1 = await empUser1.json(); 
console.log('one user name:', data1[1]); 
}
employee();

// const response = await fetch('https://https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);