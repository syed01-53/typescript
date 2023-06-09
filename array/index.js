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
var employee = [
    {
        name: "zain ",
        id: 373,
        gender: "male",
        status: "non-employee",
        age: 40
    },
    {
        name: "zamba ",
        id: 373,
        gender: "female",
        status: "employee",
        age: 20
    },
    {
        name: "uwiiw ",
        id: 373,
        gender: "femalemale",
        status: "employee",
        age: 18
    },
    {
        name: "shah ji ",
        id: 373,
        gender: "female",
        status: "employee",
        age: 14,
    }
];
for (var i = 0; i < employee.length; i++) {
    console.log("all employee");
    console.log(employee[i]);
}
// we are using of loop A for...of loop operates on the values sourced from an iterable one by one in sequential order.
var totalNoneEmployee = 0;
var totalEmployee = 0;
var jobEmployee = [];
// for (const iterator of employee) {
//     if(iterator.status==="employee")
//     {
//         totalEmployee+=1;
//         jobEmployee.push(iterator);
//     }
//     else
//     {
//         totalNoneEmployee+=1;
//     }
// }
// console.log(jobEmployee);
// console.log(`total employee ${totalEmployee}`);
// console.log(`total  not employee ${totalNoneEmployee}`);
// what is filter 
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
var junior = employee.filter(function (employee) {
    return (employee.age < 28);
});
console.log("total junior ".concat(junior.length));
console.log(junior);
// map() make new array  and perform task 
var increseAge = employee.map(function (employee) {
    return (employee.age < 28);
});
console.log(increseAge);
