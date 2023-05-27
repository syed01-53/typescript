// // •	For loop (initialization ;condition ; increment /decrement)
// •	While (condition){ execute and increment and decrement }
// •	Do while loop
//  how to export and import 
// FOR of loop 
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
var arrayOfData = ["string", 1, null, undefined];
// for of syntax  for(  let i of-keyword nameofarary )
for (var _i = 0, arrayOfData_1 = arrayOfData; _i < arrayOfData_1.length; _i++) {
    var iterator = arrayOfData_1[_i];
    console.log(iterator); //"string", 1, null, undefined
}
for (var key in arrayOfData) {
    console.log(key); // show the index number on which particular value store 
}
var newArray = [];
// for each loop 
// Performs the specified action for each element in an array.
arrayOfData.forEach(function (item) {
    newArray.push(item);
});
// my new array value is that 
console.log(newArray);
// iterable object--> 
