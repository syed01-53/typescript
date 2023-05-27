// array collection of consecutive memory location 
// collection of similar data 
var myArray = ["zain", "Ahmad", "Ali", "Jani"];
console.log(myArray);
// for the length 
console.log(myArray.length);
// enter value at last of array
myArray.push("honey");
console.log("using push ".concat(myArray));
console.log(myArray.length);
// remove at last 
myArray.pop();
console.log("using pop ".concat(myArray));
console.log(myArray.length);
// enter value at first 
myArray.unshift("kohji");
console.log("shift to enter at first ".concat(myArray));
console.log(myArray.length);
// remove from first 
myArray.shift();
console.log(myArray.length);
console.log("remove value from first using unshift ".concat(myArray));
var myNewarray = ["number", 746, 6354, 64647, 63466, 63773, "63646", "636gbtgdf"];
// splice in removing  element in array  and add  number 
console.log("using splice");
//splice (start , total del number, del number replace )
console.log(myNewarray.splice(0, 0, 50));
console.log(myNewarray);
// slice -->Returns a copy of a section of an array.  
//  slice (start , end ) and store in 
console.log("using slice");
var mySlice = myNewarray.slice(3, 7);
console.log(mySlice);
// mix-array 
var mixArray = [1, "hello", true];
mixArray.push("hello");
mixArray.push(true);
mixArray.push(1);
console.log(mixArray);
console.log(mixArray.length);
// reverse the array 
var usingArray = ["Syed", "Muhammad ", "Zain", "Sultan"];
var newValueOfArray = usingArray.reverse();
console.log("Reverse of array ".concat(newValueOfArray));
