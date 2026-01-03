"use strict";

var Person = (function () {
    function  Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.describe = function () {
        return "My name is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());

var personObj = new Person("Rohit", "Sharma");
console.log(personObj);