//Enums allow a developer to define a set of named constants

import { log } from "console"

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

  enum direction {
    Up, //0
    Down, //1
    Left, //2
    Right,//3
  }

  //secd example 
  enum UserResponse {
    No = 0,
    Yes = 1,
  }
   
  function respond(recipient: string, message: UserResponse): void {
    // ...
    let value =`${recipient} : `+`${message}`;
    console.log(value);
   

  }
   
 respond("Princess Caroline",UserResponse.Yes) ;
  

  //string enum 
  enum Direc_tion {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

//   In modern TypeScript, you may not need an enum when an object with as const could suffice:

const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }
   
  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;
   
  EDirection.Up;
             
 // (enum member) EDirection.Up = 0
   
  ODirection.Up;
             
//  (property) Up: 0
   
  // Using the enum as a parameter
  function walk(dir: EDirection) {
    console.log(dir);
  }
   
  // It requires an extra line to pull out the values
  type Direction = typeof ODirection[keyof typeof ODirection];
  function run(dir: Direction) {
    console.log(dir);
  }
   
  walk(EDirection.Left);
  run(ODirection.Right);
