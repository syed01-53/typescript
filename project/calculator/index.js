var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.firstNumber = num1;
        this.secondNumber = num2;
    }
    Calculator.prototype.add = function () {
        var sum = this.firstNumber + this.secondNumber;
        return sum;
    };
    Calculator.prototype.subtraction = function () {
        var sub = this.firstNumber - this.secondNumber;
        if (sub > 0) {
            return sub;
        }
        else {
            console.log("error 404");
        }
    };
    Calculator.prototype.multiplication = function () {
        var multiplication = this.firstNumber * this.secondNumber;
        return multiplication;
    };
    Calculator.prototype.divid = function () {
        var divid = this.firstNumber / this.secondNumber;
        return divid;
    };
    return Calculator;
}());
var calculate = new Calculator(4, 5);
console.log(" Sum Of Two Number  ".concat(calculate.add()));
console.log(" Subtraction of two number ".concat(calculate.subtraction()));
console.log("Multiplication of two number ".concat(calculate.multiplication()));
console.log(" Division of two number ".concat(calculate.divid()));
