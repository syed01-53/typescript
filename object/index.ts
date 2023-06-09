// what is object ?
// object is something possess 
//object has properties and its function  
// notation  { }
// **object with properties 

// simple object 
// reference object 
let object={
    name:"zain",
    phone:8738373674,

}
// directly access 
console.log(object.name);
console.log(object.phone);
// access through variable 
let studentName=object.name;
let numberOfStudent=object.phone;

console.log(`student name: ${studentName} `);
console.log( `student number: ${numberOfStudent}`);

// changing the value of object 
object.name="shaheen";
object.phone=2377723;

console.log(`student name change value is that: ${object.name} `);
console.log( `student number change value is that: ${object.phone}`);

// anonymous object:

let x={
    name:"zain",
    id:323,
}

console.log(x.id);
// anonymous object:
function geter (obj:object) {
    console.log(obj)
    console.log(obj.valueOf())
console.log(`hello ${obj}`)
};

const name1="tgyg";
const password=676;

geter({
    name1,
    password
   
});
// console.log(geter.name);
// object class is super class 
//class is blue print  
// example divided of  piece in equal pieces  every piece is object 
// anonymous 
function printObject(obj:object)
{    console.log(obj);
    console.log(`anonymous ${obj}`);
}
printObject({
    name1,
    password
})


// **object with function 
// simple object  with properties and function 
let person  ={
    personMassage:"we can do ",
    personId:3636,

      worker(){
        // this use because we pass data form the object properties to  object function properties 
        // means not getting data from global object 
        // her we are getting data from child 
       console.log(`hello powerful man ${this.personMassage}`);
       
      },
      details(name:string, id:number){
        console.log(`hello powerful man ${name} and his id is ${id}`);
        
       }
}
// call of object  function
console.log(person.worker());
person.details("zain", 6363);

interface iperson{
name1:string;
id:233;
}

function printObject2(obj:iperson)
{    console.log(obj);
    console.log(`anonymous with interface ${obj}`);
}


// make object 
// interface start with the upper case
interface ImyNewObject{
    name:string,
    number:number
}
let myNewObject:ImyNewObject={
name:"zain ",
number:53636,
}

// nested object 
interface Iadress{
    city:string;
 streetNo :number ;
}
interface Istudent {
    name:string ;
    id:number;
    address :Iadress;
}
let student :Istudent={
    name:"zain ",
    id:62373,
    address: {
       city:"Bahawalpure",
       streetNo:637
    }
}
console.log(student);
console.log(`student details :${student}`);
console.log(student.address);
console.log( `address details:${student.address}`);

//  object array 
interface Iemployee{
    name:string;
    id:number;
    gender:string;
    status:string;
}
let employee:Iemployee[]=[
    {
        name:"zain ",
        id:373,
        gender:"male",
        status:"non-employee"
    },
    {
        name:"zamba ",
        id:373,
        gender:"female",
        status:"employee"
    },
    {
        name:"uwiiw ",
        id:373,
        gender:"femalemale",
        status:"employee"
    },
    {
        name:"shah ji ",
        id:373,
        gender:"female",
        status:"employee"
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

for (const iterator of employee) {
    if(iterator.status==="employee")
    {
        totalEmployee+=1;
        jobEmployee.push(iterator);
    }
    else
    {
        totalNoneEmployee+=1;
    }
}
console.log(jobEmployee);
console.log(`total employee ${totalEmployee}`);
console.log(`total  not employee ${totalNoneEmployee}`);
// type object 
type bro ={
    firstname:string, lastName:string ;
}
let namaePerson:bro={
firstname:"zain",
lastName:"shaheen" ,
// produce error 
// hhdhd:"hdhdb";  
}