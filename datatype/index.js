/*•	Data type: number, string, null, undefined, void, object() , array, enum(collection of constant values) , any(never using)*/
var num = 5;
console.log(num);
// string
var nameStudent = "we can do ";
console.log(nameStudent);
// null
var number = null;
console.log(number);
// void
function display() {
    console.log("my value is ");
}
display();
// return string 
function displayString() {
    return ("a+b");
}
console.log(displayString());
// object 
var computer = {
    brand: 'webno',
    color: 'color',
    price: 5353,
};
console.log(computer);
// enum(consist of constant values)
var Month;
(function (Month) {
    Month["jan"] = "january";
    Month["feb"] = "february";
})(Month || (Month = {}));
console.log(Month.jan);
// array ( An array is a collection of items of same data type stored at contiguous memory locations.)
var aStore = ["hello", "hi"];
console.log(aStore);
