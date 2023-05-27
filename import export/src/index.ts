// import Welcome from "./export";
import Wel from "./export";
// the name dose not matter when you export ang  function, thing 

let welcome=new Wel("Most Welcome");
console.log(welcome.displayMassage());

// import multiple function 
import subtraction, { multiplication, sum } from "./utility";
console.log(sum(1,3))
console.log(subtraction(1,3));
console.log(multiplication(2,4));
