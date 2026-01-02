

// Promise.any --> Returns the first successful response
// promises and resolves as soon as one of the promises resolves.

const myPromise = new Promise((resolve, reject) => {
    console.log("wel come");
})

const myPromise1 = new Promise((resolve, reject) => {
    console.log("Wel done India");
})

Promise.any([myPromise, myPromise1])
.then((x) => {
    display(x);
})

// iterable: An array of Promise objects.

const pro = Promise.resolve("Resolved value..");
const prom = Promise.reject("Rejected value");

Promise.any([pro, prom])
.then((index) => {
    console.log("all resolved : ", index);
}).then((errer) => {
    console.error("all rejected : ", errer);
});