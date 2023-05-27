var x = Math.round(Math.random() * 10); // using math libarary 
if (x > 1) {
    console.log("your number is greater then one");
}
else {
    console.log("your number is not  greater then one");
}
if (x > 1 && x <= 3) {
    console.log("your nuber between 1 and 3 ".concat(x));
}
else if (x > 3 && x <= 9) {
    console.log("your nuber between 4 and 9 ".concat(x));
}
else {
    console.log("your number is greater then 9 ".concat(x));
}
