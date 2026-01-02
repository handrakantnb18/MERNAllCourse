// Implement the private field in class

//  private class fields using the # (hash) 

class Employee {
    #city;
    constructor(firstName, lastName, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#city = city;
    }
    checkCity(arr){
        return this.#city == arr;
    }
}

// check the boolean value true or false

const employee = new Employee("youraj", "sing","mohali");

console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.checkCity("mohali"));

//console.log(employee.#city);