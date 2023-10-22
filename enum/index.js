"use strict";
//Enums allow a developer to define a set of named constants
Object.defineProperty(exports, "__esModule", { value: true });
//Numeric enums
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
//   }
//   console.log(Direction.Up)
//   console.log(Direction.Down)
//   console.log(Direction.Left)
//   console.log(Direction.Right)
//Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
var direction;
(function (direction) {
    direction[direction["Up"] = 0] = "Up";
    direction[direction["Down"] = 1] = "Down";
    direction[direction["Left"] = 2] = "Left";
    direction[direction["Right"] = 3] = "Right";
})(direction || (direction = {}));
//secd example 
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    // ...
    let value = `${recipient} : ` + `${message}`;
    console.log(value);
}
respond("Princess Caroline", UserResponse.Yes);
//string enum 
var Direc_tion;
(function (Direc_tion) {
    Direc_tion["Up"] = "UP";
    Direc_tion["Down"] = "DOWN";
    Direc_tion["Left"] = "LEFT";
    Direc_tion["Right"] = "RIGHT";
})(Direc_tion || (Direc_tion = {}));
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
0 /* EDirection.Up */;
// (enum member) EDirection.Up = 0
ODirection.Up;
//  (property) Up: 0
// Using the enum as a parameter
function walk(dir) {
    console.log(dir);
}
function run(dir) {
    console.log(dir);
}
walk(2 /* EDirection.Left */);
run(ODirection.Right);
