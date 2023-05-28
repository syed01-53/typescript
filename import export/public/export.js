"use strict";
// when you want to export just value then we use default export  
// we can change the name of export 
Object.defineProperty(exports, "__esModule", { value: true });
class Welcome {
    constructor(text) {
        this.text = text;
    }
    displayMassage() {
        return (this.text);
    }
}
exports.default = Welcome;
// you can use only onetime default keyword in whole of program 
