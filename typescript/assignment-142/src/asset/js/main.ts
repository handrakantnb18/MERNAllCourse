
function welcome (Name: string, city?: string, country?: string): string { 
        return `My Name is ${Name}, and City ${city ?? ": Mumbai"}, and country : ${country ?? "India"}`;
}

console.log(welcome("Rohit Sharma"));
console.log(welcome("Sachin tendulkar"));
