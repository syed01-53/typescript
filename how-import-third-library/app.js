// import inquirer from "inquirer";
// inquirer third  party library that use in project 
// some setting 
// i)      npm i inquirer
// npm i --save-dev @types/inquirer
// update config file
//     "module": "nodenext",
//"moduleResolution": "NodeNext", 
//"target": "es2020",  
//     "type": "module" in package jason file 
//inquirer use to  take data from user 
// type 
import inquirer from "inquirer";
// library  character base coloring 
import chalk from "chalk";
//  syntax prompt ( question , answer)
//synchronous method is a method that depend one result upon his previous value 
// asynchronous method
let answers = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
