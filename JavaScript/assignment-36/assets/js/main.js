
// do.. while loop
let i = 1
do{
    console.log(i);
    i++;
}while(i <= 5)

// for.. of 
const colors =['Orange','White','Green','Red','blue'];

for(const color of colors)
{
    console.log(color);
}

// for.. in 
const person ={
    firstName: "Virat",
    lastName: "Kohli",
    age: "36",
    city: "Banglore"
};

for(const cricketer in person)
{
    console.log(cricketer+ " : "+ person[cricketer]);
}