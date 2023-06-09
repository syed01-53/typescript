// what is object ?
// object is something possess 
//object has properties and its function  
// notation  { }
// **object with properties 
// simple object 
// reference object 
var object = {
    name: "zain",
    phone: 8738373674,
};
// directly access 
console.log(object.name);
console.log(object.phone);
// access through variable 
var studentName = object.name;
var numberOfStudent = object.phone;
console.log("student name: ".concat(studentName, " "));
console.log("student number: ".concat(numberOfStudent));
// changing the value of object 
object.name = "shaheen";
object.phone = 2377723;
console.log("student name change value is that: ".concat(object.name, " "));
console.log("student number change value is that: ".concat(object.phone));
// anonymous object:
var x = {
    name: "zain",
    id: 323,
};
console.log(x.id);
// anonymous object:
function geter(obj) {
    console.log(obj);
    console.log(obj.valueOf());
    console.log("hello ".concat(obj));
}
;
var name1 = "tgyg";
var password = 676;
geter({
    name1: name1,
    password: password
});
// console.log(geter.name);
// object class is super class 
//class is blue print  
// example divided of  piece in equal pieces  every piece is object 
// anonymous 
function printObject(obj) {
    console.log(obj);
    console.log("anonymous ".concat(obj));
}
printObject({
    name1: name1,
    password: password
});
// **object with function 
// simple object  with properties and function 
var person = {
    personMassage: "we can do ",
    personId: 3636,
    worker: function () {
        console.log("hello powerful man ".concat(this.personMassage));
    },
    details: function (name, id) {
        console.log("hello powerful man ".concat(name, " and his id is ").concat(id));
    }
};
// call of object  function
console.log(person.worker());
person.details("zain", 6363);
function printObject2(obj) {
    console.log(obj);
    console.log("anonymous with interface ".concat(obj));
}
var myNewObject = {
    name: "zain ",
    number: 53636,
};
var student = {
    name: "zain ",
    id: 62373,
    address: {
        city: "Bahawalpure",
        streetNo: 637
    }
};
console.log(student);
console.log("student details :".concat(student));
console.log(student.address);
console.log("address details:".concat(student.address));
var employee = [
    {
        name: "zain ",
        id: 373,
        gender: "male",
        status: "non-employee"
    },
    {
        name: "zamba ",
        id: 373,
        gender: "female",
        status: "employee"
    },
    {
        name: "uwiiw ",
        id: 373,
        gender: "femalemale",
        status: "employee"
    },
    {
        name: "shah ji ",
        id: 373,
        gender: "female",
        status: "employee"
    }
];
for (var i = 0; i < employee.length; i++) {
    console.log("all employee");
    console.log(employee[i]);
}
// we are using of loop A for...of loop operates on the values sourced from an iterable one by one in sequential order.
var totalNoneEmployee = 0;
var totalEmployee = 0;
var jobEmployee = [];
for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
    var iterator = employee_1[_i];
    if (iterator.status === "employee") {
        totalEmployee += 1;
        jobEmployee.push(iterator);
    }
    else {
        totalNoneEmployee += 1;
    }
}
console.log(jobEmployee);
console.log("total employee ".concat(totalEmployee));
console.log("total  not employee ".concat(totalNoneEmployee));
