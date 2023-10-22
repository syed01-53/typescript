"use strict";
// Declaring Object 
const poet = {
    id: 1223,
    name: "have a good day "
};
poet.name = "me have not a any name";
console.log(poet.name);
// Type define 
let poetLater;
poetLater =
    {
        id: 123,
        name: "My Value "
    };
poetLater.name = "i have a nothing ";
console.log(poetLater.name);
let myStudent = {
    id: 8349,
    name: "mehmmad",
    result: () => myStudent.id * Math.random(),
};
let resultValue = myStudent.result();
console.log(resultValue);
let poem = {
    name: "dafudiles ",
    auther: {
        id: 121,
        fname: "zain",
        lname: "sultan"
    }
};
console.log(poem.name);
console.log(poem.auther.id);
let BookS = {
    pages: 1212
};
console.log(BookS.pages);
const poem2 = Math.random() < 0.0
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poem2.type === "pages") {
    console.log(`It's got pages: ${poem2.pages}`); // Ok
}
else {
    console.log(`It rhymes: ${poem2.type}`);
}
