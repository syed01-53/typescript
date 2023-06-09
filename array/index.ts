// array collection of consecutive memory location 
// collection of similar data 

var myArray:string[]=["zain","Ahmad", "Ali", "Jani" ];
console.log(myArray);
// for the length 
console.log(myArray.length);
// enter value at last of array
myArray.push("honey");
console.log(`using push ${myArray}`);
console.log(myArray.length);
// remove at last 
myArray.pop();
console.log( `using pop ${myArray}`);
console.log(myArray.length);
// enter value at first 

myArray.unshift("kohji");
console.log(`shift to enter at first ${myArray}`);
console.log(myArray.length);
// remove from first 
myArray.shift();
console.log(myArray.length);
console.log (`remove value from first using unshift ${myArray}`);

var myNewarray:(number | string )[]=["number", 746,6354, 64647 , 63466, 63773, "63646", "636gbtgdf"]
// splice in removing  element in array  and add  number 
console.log("using splice");
//splice (start , total del number, del number replace )
console.log(myNewarray.splice(0 ,0,50));

console.log(myNewarray);
// slice -->Returns a copy of a section of an array.  
//  slice (start , end ) and store in 
console.log("using slice");

var mySlice=myNewarray.slice(3,7)
console.log(mySlice);

// mix-array 
var mixArray:(number|string|boolean)[]=[1,"hello" , true ];
mixArray.push("hello");
mixArray.push(true);
mixArray.push(1);
console.log(mixArray);
console.log(mixArray.length);


// reverse the array 
var usingArray:(string | number| null)[]=["Syed","Muhammad ", "Zain" , "Sultan"];

var newValueOfArray=usingArray.reverse();
console.log(`Reverse of array ${newValueOfArray}`);

//  object array 
interface Iemployee{
    name:string;
    id:number;
    gender:string;
    status:string;
    age:number;
}
let employee:Iemployee[]=[
    {
        name:"zain ",
        id:373,
        gender:"male",
        status:"non-employee",
        age:40
    },
    {
        name:"zamba ",
        id:373,
        gender:"female",
        status:"employee",
        age:20
    },
    {
        name:"uwiiw ",
        id:373,
        gender:"femalemale",
        status:"employee",
        age:18

    },
    {
        name:"shah ji ",
        id:373,
        gender:"female",
        status:"employee",
        age:14,
    }
    
];

for(let i=0;i<employee.length ; i++){
    console.log("all employee");
 
    console.log(employee[i]);
  
}

// we are using of loop A for...of loop operates on the values sourced from an iterable one by one in sequential order.
let totalNoneEmployee:number=0;
let totalEmployee :number=0;
let jobEmployee :Iemployee[]=[] ;

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
// Returns the elements of an array that meet the condition specified in a callback function.

let junior:Iemployee[]=employee.filter((employee:Iemployee)=>{
    return( employee.age<28) ;      
});
console.log(`total junior ${junior.length}`);
console.log(junior);

// map() make new array  and perform task callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays. k function on each element of an array
let increseAge=employee.map((employee:Iemployee)=>{
  return(employee.age<28);
}) 

console.log(increseAge)
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
let calculate =[1, 2 ,23, 475,3,1,3];
const myresult:number=calculate.reduce((h1:number , h2:number)=>{
    return(h1+h2);
})



