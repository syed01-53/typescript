// •	Function (repetition of code or work multiple time )
// Name function and arrow function 

// name function  has scope is small
function FunctionName(parameters:string):void{
console.log(parameters);

};
// function call
FunctionName("value");
// arrow function  has scope is more 
let preFunction =(prameters:string)=>{
    console.log(prameters);
}
preFunction("my value")

// name function  with return 
function Claculate(num:number, num1:number):number{
    return(num+num1);
}
let result=Claculate(6, 5);
console.log(`Sum through function name:: ${result}`);
// arrow function 
let Claculator =(num1:number, num2:number)=>{
return(num1+num2);
}
console.log( `Sum through arrow function:: ${Claculator(4,5)}`);

let arrowFunction= (num:string, num2:number, num1:null=null)=>{
  return(`result is that : ${num}  ${num2}  ${num1}`);
}
console.log(arrowFunction("number",12));

let arrowFunction1= (num:string, num2?:number, num1:null=null)=>{
    return(`result is that : ${num}  ${num2}  ${num1}`);
  }
  console.log(arrowFunction1("number"));


