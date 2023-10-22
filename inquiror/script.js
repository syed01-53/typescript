import inquirer from 'inquirer';
const question = [{
        name: 'age',
        type: 'number',
        message: 'what is yyour age '
    }];
let username = inquirer.prompt(question);
username.then((username) => {
    console.log("age", username);
})
    .catch((err) => {
    console.log('error', err);
});
