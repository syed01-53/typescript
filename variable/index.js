/*
variable memory location
•	 variable name started with lowercase and Class, Interface, Enum start with the uppercase
•	 camelCase for the variable
*/
/* •  let and var both for variable declaration but var is function scoped and let is blocked scoped
•		var is declared and let  cannot re-declared and must be
•		use let and constant not use var
•		*/
// Template literal `${variable} 
var num = 5;
console.log(num);
var username;
username = "heelo";
console.log(username);
// function changeValues() :void{
//     let use:string="let";
// }
// console.log(use);  //cannot find it 
// function changeValues1() :void{
//     var use:string="let";
// }
// console.log(use);  //cannot find it 
// tempalte literal 
console.log("user values ".concat(num, "+").concat(username));
var useName;
useName = "string";
console.log(typeof useName);
useName = 123;
console.log(typeof useName);
useName = null;
console.log(typeof useName);
