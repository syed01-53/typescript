"use strict";
// Union means collecting types of two different literal at at same place 
let nameStudent;
nameStudent = "zain";
console.log(nameStudent);
nameStudent = 6257;
console.log(nameStudent);
let age;
age = 12;
age = age.toString(); //valid for both number and string 
// age=age.toLowerCase; error 
console.log(age);
age = "how much muy age ";
age = age.toString(); //valid in both term 
age = age.toUpperCase(); //valid in string  term 
console.log(age);
let number = 5;
let input = "hello";
// === this sign check type +compare
function caomparingVlaue(number, input) {
    if (number === 5)
        return (`yes this number is found  ${input}`);
    else {
        return (` this number is not found  ${input}`);
    }
}
console.log(caomparingVlaue(number, input));
// math built-in function 
//	Ternary operator  (?  : )  (condition )?true part : false part
let takAge = Math.random() > 0.6 ? "zain" : 60;
console.log(takAge);
let myvalue = "zain ";
console.log(myvalue);
