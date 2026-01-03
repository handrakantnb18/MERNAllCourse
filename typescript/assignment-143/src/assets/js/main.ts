
function foo(name: string, country: string = "US", profession: string = "ABC"): string {
    //return name;
    return `My Name is ${name}, and country ${country}, and profession : ${profession}`;
}

console.log(foo("Donald trump"));
console.log(foo("Narendra Modi"));
