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
var person = /** @class */ (function () {
    function person(age, name) {
        this.age = age;
        this.name = name;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    return person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(rollNumber, age, name) {
        var _this = _super.call(this, age, name) || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    student.prototype.registerCourses = function (name) {
        this.courses.push(name);
    };
    return student;
}(person));
var instructor = /** @class */ (function (_super) {
    __extends(instructor, _super);
    function instructor(salary, age, name) {
        var _this = _super.call(this, age, name) || this;
        _this.coursesTech = [];
        _this.salary = salary;
        return _this;
    }
    instructor.prototype.assignment = function (course) {
        this.coursesTech.push(course);
    };
    return instructor;
}(person));
var courses = /** @class */ (function () {
    function courses(name, id) {
        // her we  are also use student class as 
        this.student = [];
        // same as student class  
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    courses.prototype.addStudent = function (student) {
        this.student.push(student);
        student.registerCourses(this.name);
        return this.student;
    };
    return courses;
}());
//register student 
var student1 = new student(12212, 3432, "Ali");
var student2 = new student(12212, 3432, "Ahmad");
var student3 = new student(12212, 3432, "Riaz");
student1.registerCourses("MEta ");
student2.registerCourses("web");
student1.registerCourses("blockchain");
console.log(student1);
// instructor 
var instructor1 = new instructor(12121, 31, "Mehmmad");
instructor1.assignment("web3.0");
console.log(instructor1);
// courses 
var course1 = new courses("meta", 747838);
console.log(course1.addStudent(student1));
