import inquirer, { Answers, QuestionCollection } from 'inquirer';
const question:QuestionCollection=[{
    name:'age',
    type:'number',
    message:'what is yyour age '
}]
let username:Promise<Answers> =inquirer.prompt(question)
username.then((username:Answers)=>{
   console.log("age",username )
})
.catch((err)=>{
console.log('error',err);

})