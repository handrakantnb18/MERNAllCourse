
/*   the calss with inheritance */

// class and constructor
class Empolyee{
    constructor(fname, lname, city, dept){
        this.fname = fname;
        this.lname = lname;
        this.city = city;
        this.dept = dept;
    }
    desc(){
        return `My name is ${this.fname} ${this.lname} and city is ${this.city} and Department ${this.dept}`;
    }
}

// inheritance class
class Person extends Empolyee{
    constructor(fname, lname, city, dept, profession, salary){
        super(fname, lname, city, dept);
        this.profession = profession;
        this.salary = salary;
    }
    descPerson(){
        return `My name is ${this.fname} ${this.lname} and city is ${this.city} and Department ${this.dept}. my profession is ${this.profession} and salary is ${this.salary} of months`;
    }
}

// polymorphism
const anil = new Person("Anil", "pawar", "pune", "HR", "Profession", "32000");
const sachin = new Person("Sachin", "Sawant", "Kolhapur", "Development", "Profession", "32000");
const shyam = new Person("Shyam", "Prajapati", "Surat", "Testing", "Profession", "32000");

console.log(anil.descPerson());
console.log(sachin.descPerson());
console.log(shyam.descPerson());

//without inheritance
// const anil = new Empolyee("Anil", "pawar", "pune", "HR", "Profession", "32000");
// const sachin = new Empolyee("Sachin", "Sawant", "Kolhapur", "Development", "Profession", "32000");
// const shyam = new Empolyee("Shyam", "Prajapati", "Surat", "Testing", "Profession", "32000");

// console.log(anil.desc());
// console.log(sachin.desc());
// console.log(shyam.desc());