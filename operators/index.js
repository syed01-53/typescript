/* 	Arithmetic (+, -,*, /, %)
	Shorthand math (+=, -=, *=,  /=)
	Increment /decrement (--, ++)
	Logical operator (&&, ||, ^)
	Conditional operator (<, > <=, =>, !==)
	Ternary operator  (?  : )
*/
var one = 5;
var second = 5;
console.log(one + second);
console.log(one - second);
console.log(one / second);
console.log(one % second);
console.log("sum :".concat(one + second));
console.log("sub :".concat(one - second));
console.log("divide :".concat(one / second));
console.log("multiplication :".concat(one * second));
console.log("remainder :".concat(one % second));
//ternary operator
// 	Ternary operator  (?  : )  (condition )?true part : false part
var marks = 599;
var result = '';
(marks >= 200) ? result = "you are Pass " : result = "you are Fail";
console.log(result);
