"use strict";
// import Welcome from "./export";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = __importDefault(require("./export")); //export form the default 
let student1 = require("./student"); //export form the non-default 
let myData = student1.studentObject;
let myData1 = student1.newStudent;
for (let i = 0; i < myData.length; i++) {
    // display result in object 
    console.group(`id=${myData[i].id} , name=${myData[i].name}`);
}
// the name dose not matter when you export ang  function, thing 
let welcome = new export_1.default("Most Welcome");
console.log(welcome.displayMassage());
// import multiple function 
const utility_1 = __importStar(require("./utility"));
console.log((0, utility_1.sum)(1, 3));
console.log((0, utility_1.default)(1, 3));
console.log((0, utility_1.multiplication)(2, 4));
myData1.forEach((myData) => {
    `ID : ${myData.id} And name of student ${myData.name}`;
});
