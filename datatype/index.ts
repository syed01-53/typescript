 /*•	Data type: number, string, null, undefined, void, object() , array, enum(collection of constant values) , any(never using)*/
/*  let and var both for variable declaration but var is function scoped and let is blocked scoped
var is declared and let  cannot re-declared and must be 
use let and constant not use var
*/ let num:number=5;
console.log(num);

// string
let nameStudent:string="we can do ";
console.log(nameStudent);
// null
let number:null=null;
console.log(number);
// void
function display():void{
    console.log("my value is ")
}
display();
// return string 
function displayString():string{
   
    return("a+b");
}
console.log(displayString());
// object 
let computer:object={
    brand:'webno',
    color:'color',
    price:5353,
}
console.log(computer);
// enum(consist of constant values)
enum Month{
jan='january',
feb='february',
}
console.log(Month.jan);
// array ( An array is a collection of items of same data type stored at contiguous memory locations.)
let aStore:string[]=["hello","hi"];
console.log(aStore);