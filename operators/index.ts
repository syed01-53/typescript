/* 	Arithmetic (+, -,*, /, %)
	Shorthand math / assignment operator (+=, -=, *=,  /= ,=)
	Increment /decrement (--, ++)
	Logical operator (&&, ||, !) result in the foam of tureor false
	Conditional operator (<, > <=, >=, !== , ==, === )
	Ternary operator  (?  : )
*/










let one:number =5;
let second:number=5;
console.log(second==one);//check equal to
console.log(second===one);//check equal to and data type

console.log(second!==one);//check not equal to



console.log(one+second);
console.log(one-second);
console.log(one/second);
console.log(one%second);
console.log(`sum :${one+second}`);
console.log(`sub :${one-second}`);
console.log(`divide :${one/second}`);
console.log(`multiplication :${one*second}`);
console.log(`remainder :${one%second}`)
console.log(`exponential :${one**second}`)





//ternary operator
// 	Ternary operator  (?  : )  (condition )?true part : false part
var marks:number=599;
var result :string='';
(marks >= 200)? result= "you are Pass ": result="you are Fail";
console.log(result);


