"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplication = exports.sum = void 0;
// default used only one time in all default 
let sum = (num1, num2) => {
    return (num1 + num2);
};
exports.sum = sum;
function subtraction(num1, num2) {
    return (num1 - num2);
}
exports.default = subtraction;
function multiplication(num1, num2) {
    return (num1 * num2);
}
exports.multiplication = multiplication;
