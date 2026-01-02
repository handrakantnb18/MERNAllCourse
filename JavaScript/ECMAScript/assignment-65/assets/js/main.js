// Implement all the features of ES11

// Optional Chaining (?.)
// Safely access deeply nested properties without checking each level.

const user = {profile: { name: 'sachin'}};

console.log(user?.profile?.name);
console.log(user?.address?.city);

// Nullish Coalescing Operator (??)
// right-hand value only if the left is null or undefined.

const index = null;
const result = index ?? "defoult";
const result1 = index || "treat";
const result2 = 0 || "Delta";

console.log(result);
console.log(result1);
console.log(result2);

// Promise.allSettled()
// promise that resolves when all input promises settle

const prime = Promise.resolve(50);
const prime1 = Promise.reject("error");
const prime2 = Promise.resolve(90);

Promise.allSettled([prime, prime1, prime2])
.then(result => {
    console.log(result);
});