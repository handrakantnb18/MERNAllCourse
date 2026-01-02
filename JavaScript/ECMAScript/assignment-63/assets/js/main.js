
// Implement all the features of ES9
// Rest for Object

const user = {
    fname : 'chandrakant',
    lname: 'bhosale',
    city : 25
};
const {fname, ...rest} = user;
console.log(fname);

console.log(rest);

// Spread for Object

const employee = { empfName : "smith", emplName : "Adam", age : 33};
const address = {city : "Adled", country : "Austrolia"};

const fullDetails = {...employee,  ...address};

delete fullDetails.empfName;
console.log(fullDetails);
console.log(employee);

// Promise.prototype.finally()

function getOne(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("One");
        }, 3000)
    })
}

function getTwo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Two");
        }, 5000)
    })
}

function getThree(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Three");
        }, 7000)
    })
}

Promise.all([getOne(), getTwo(), getThree()])
.then(function(outputOne){
    console.log(outputOne);
    //console.log(outputTwo);
    //console.log(outputThree);
})

.then(function(outputTwo){
    //console.log(outputOne);
    console.log(outputTwo);
    //console.log(outputThree);
})

.then(function(outputThree){
    //console.log(outputOne);
    //console.log(outputTwo);
    console.log(outputThree);
})

// console.log(new Date().getSeconds());
// getOne().then(function(outputOne){
//     getTwo().then(function(outputTwo){
//         getThree().then(function(outputThree){
//             console.log(outputThree);
//         })
//     })
// })