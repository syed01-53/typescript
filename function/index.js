// •	Function (repetition of code or work multiple time )
// Name function and arrow function 
// name function  has scope is small
function FunctionName(parameters) {
    console.log(parameters);
}
;
// function call
FunctionName("value");
// arrow function  has scope is more 
var preFunction = function (prameters) {
    console.log(prameters);
};
preFunction("my value");
// name function  with return 
function Claculate(num, num1) {
    return (num + num1);
}
var result = Claculate(6, 5);
console.log("Sum through function name:: ".concat(result));
// arrow function 
var Claculator = function (num1, num2) {
    return (num1 + num2);
};
console.log("Sum through arrow function:: ".concat(Claculator(4, 5)));
var arrowFunction = function (num, num2, num1) {
    if (num1 === void 0) { num1 = null; }
    return ("result is that : ".concat(num, "  ").concat(num2, "  ").concat(num1));
};
console.log(arrowFunction("number", 12));
var arrowFunction1 = function (num, num2, num1) {
    if (num1 === void 0) { num1 = null; }
    return ("result is that : ".concat(num, "  ").concat(num2, "  ").concat(num1));
};
console.log(arrowFunction1("number"));
// recursive function call it self 
function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    }
}
getRecursive(5);
// setTimeout();
var num1 = function () { return console.log("one"); };
var num2 = function () { return console.log("two"); };
var num3 = function () { return console.log("three"); };
var num4 = function () {
    console.log("four");
    //run after certain time 
    setTimeout(num1, 0);
    num3();
};
console.log(num4());
