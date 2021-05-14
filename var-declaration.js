"use strict";
//var, let, const
//var
var pet = "dog";
function setPet() {
    var pet = "cat";
    console.log("Pet outside the house is: " + pet);
}
setPet();
console.log("Pet outside the house is: " + pet);
var index = 0;
for (var index = 0; index < 5; index++) {
    console.log("var Index inside the Loop: " + index);
}
console.log("var Index outside the Loop: " + index);
//let
var indexWithLet = 0;
for (var indexWithLet_1 = 0; indexWithLet_1 < 5; indexWithLet_1++) {
    console.log("let Index inside the Loop: " + indexWithLet_1);
}
console.log("let Index outside the Loop: " + indexWithLet);
//const
var value = "I am constant";
console.log("Variable says: " + value);
var obj = {
    foo: "foo"
};
obj["bar"] = "bar";
console.log("Object state can be mutated:", obj);
