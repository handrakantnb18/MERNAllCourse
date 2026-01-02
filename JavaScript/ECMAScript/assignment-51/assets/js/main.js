"use strict";

// var variable
function vardemo() {
    var foo = "Wel come to javascript, var variable";
    console.log(foo);
}
vardemo();

// let variable

function letdemo(){
    let foo = "Hello, let practice example";
    console.log(foo);
}
letdemo();

// const variable
function constdemo(){
    const i = "const practice example";
    console.log(i);
}
constdemo();

//const addition variable

const addition = function(args1, args2){
    return args1 + args2;
}

const add = (args1, args2) => args1 + args2;

const res = addition(10, 25);
console.log("addition number of const variable :", +res);

//const multiplication variable
const multi = function(args1, args2){
    return args1 * args2;
}

const mult = (args1, args2) => args1 * args2;

const m = multi(10, 25);
console.log("multiplication number of const variable :", +m);