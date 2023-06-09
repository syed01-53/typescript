// class Mobile {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     private brand:string ;
//     private color:string ;
//     private price:number ;
//       // her ! indicate this value not empty every time of filling 
//     owner !:string;
// // optional 
//     name?:string;
//     // only one time use  keyword readonly 
//     readonly vinNumber!:string
// // constructor is used to initializing  the 
// // call on making new object automatic 
//     constructor(brand : string, color:string, price:number, vinNumber:string)
//     {
//         // this keyword refer to current class 
//         this.brand=brand;
//         this.color=color;
//         this.price=price;
//         this.vinNumber=vinNumber;
//     }
// }
// // new keyword generate new object 
// let mobile= new Mobile("hello" ,"blue", 3535, "965223as");
// console.log(mobile);
// class car {
//     private color="sliver";
//     start(state:boolean){
// if (state===true) {
//     console.log("start your car");
// } else {
//     console.log("no start");
// }
//     }
// }
// let myStart=new car();
// // accessing function 
// myStart.start(true);
// ** override constructor  mens using multiple constructor in similar class The constructor method is a special method for creating and initializing an object created with a class.
// overriding method using same name of function with different  functionality or same 
// extend the constructor 
var car = /** @class */ (function () {
    function car(color, location, vicNumber) {
        this.vicNumber = vicNumber;
        this.location = location;
        this.color = color;
    }
    //without overriding   function 
    //    start(state:boolean){
    //      if(state===true)
    //      {
    //         console.log("car start");
    //      }
    //      else {
    //         console.log( "not started"  ); 
    //      }
    //    }
    // with overriding   function
    car.prototype.start = function (state) {
        if (state === true) {
            return ("car start");
        }
        else {
            return ("not started");
        }
    };
    return car;
}());
var nissan = /** @class */ (function (_super) {
    __extends(nissan, _super);
    // if we are using child class constructor then we also use super keyword 
    function nissan(color, location, vicNumber) {
        var _this = _super.call(this, color, location, vicNumber) || this;
        _this.vacum = true;
        _this.name = "nissan0";
        return _this;
    }
    // with overriding   function
    nissan.prototype.start = function (state) {
        if (state === true) {
            return ("".concat(this.name, " started "));
        }
        else {
            return ("".concat(this.name, " not started "));
        }
    };
    return nissan;
}(car));
var myCar1 = new car("blue", "pakistan", 3647634);
console.log(myCar1.start(true));
console.log(myCar1);
// accessing child class
var myCar = new nissan("black", "pak ", 7328);
console.log(myCar.start(true));
console.log(myCar);
