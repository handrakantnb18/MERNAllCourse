
// push()  --> add an item to the end

let fruits=["apple","banana","mango"];
fruits.push("orange");
console.log(fruits);

// pop()  --> remove an item an end

let foo =["abc", "def", "ghi","jkl"];
foo.pop();
console.log(foo);

// shipt()  --> remove the first item

let fruts=["apple","banana","mango"];
fruts.shift();
console.log(fruts);

// unshipt()  --> add the item of first

const foo1 =["def","ghi","jkl","mno"];
foo1.unshift("abc");
console.log(foo1);

// length()  --> return the actual length

let datas=[1,2,3,7,5,6,8,4,10,9,15,11];
console.log(datas.length);

// indexOf()  --> find in index of item

let data=[1,2,3,7,5,6,8,4,10,9,15,11];
console.log(data.indexOf(3));

// includes()  -->check if an item exist

let num=[1,2,3,7,5,6,8];
console.log(num.includes(3));

// sort() sort the array
let num1=[1,10,2,3,7,5,6,8];
console.log(num1.sort());

// reverse() --> reverse the array
var string =['w','e','l','c','o','m','e','t','o','j','a','v','a','s','c','r','i','p','t',1];
console.log(string.reverse());

// join()  --> converts  array to string

let a=[1,2,3,"chandrakant"];
let b=a.join(" / ");
console.log(b);

// map()  --> transform elements
let c=[1,2,3,4];
const arr = c.map(function(item)
{
    return item * 2;
})
console.log(arr);

// filter()  --> filter elements

let index = [1,2,3,4,5,6];
console.log(index.filter(x => x>3));

// reduce()  --> reduces to a single value

let x = [1,2,3,4,5,6];
const num2 = x.reduce((a,b) => a+b, 0);
console.log(num2);