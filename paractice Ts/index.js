"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const 
const myValue = "hello";
console.log(myValue);
// we cann't give value again;
// myValue= "je";
let array = ["2sd", "se3"];
let array1 = ["2sd", "se3", "iwhuw"];
array = array1;
console.log(array);
//what is type 
// seven basic primitives:
// • null; // null
// • undefined; // undefined
// • true; // boolean
// • "Louise"; // string
// • 1337; // number
// • 1337n; // bigint
// • Symbol("Franklin"); // symbol
let ReturnValue = Math.random() > 0.5
    //ternary operation 
    ? "Chain of Fools" : "Respect ";
console.log(ReturnValue);
//Kinds of Errors
//... Syntax
// Blocking TypeScript from being converted to JavaScript
//... Type
// Something mismatched has been detected by the type checker
let firstName = "MR,Wing";
firstName = "Muhammad"; //not any error
// let lastName = "King";
// lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.
// Type Annotations
// Sometimes a variable doesn’t have an initial value for TypeScript to read.
let value;
value = "ali";
value;
console.log(value);
let rocker; // Type: any
rocker = "Joan Jett"; // Type: string
console.log(rocker.toUpperCase());
