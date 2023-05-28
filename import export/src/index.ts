// import Welcome from "./export";

import { log } from "console";
import Wel from "./export"; //export form the default 
let student1= require("./student")  //export form the non-default 
let myData =student1.studentObject;
let myData1=student1.newStudent;
for(let i=0 ; i<myData.length; i++)
{
    // display result in object 
console.group(`id=${myData[i].id} , name=${myData[i].name}`);
}

// the name dose not matter when you export ang  function, thing 

let welcome=new Wel("Most Welcome");
console.log(welcome.displayMassage());

// import multiple function 
import subtraction, { multiplication, sum } from "./utility";
console.log(sum(1,3))
console.log(subtraction(1,3));
console.log(multiplication(2,4));

myData1.forEach((myData:any) => {
   `ID : ${myData.id} And name of student ${myData.name}`
    
});

