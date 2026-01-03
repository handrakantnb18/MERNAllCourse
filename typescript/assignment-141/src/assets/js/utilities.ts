

type personalDetailsType = {
    firstName: string,
    lastName: string,
    age: number,
    country: string
}

type ContactDetailsType = {
    mobile: number,
    emailId: string
}

type UserType = personalDetailsType & ContactDetailsType;

const user: UserType = {
    firstName: "Rohit",
    lastName: "Sharma",
    age: 32,
    country:"India",
    emailId: "abc@gmail.com",
    mobile: 56546464,
}

const user1: personalDetailsType = {
    firstName: "Rushabh",
    lastName: "Pant",
    age: 27,
    country:"India",
}

console.log(user);
 console.log(user1)


// export default function addition(args1: number, args2: number): number {
//     return args1 + args2;
// }

// export function subtraction(args1: number, args2: number): number {
//     return args1 - args2;
// }
