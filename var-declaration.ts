//var, let, const

//var
var pet = `dog`;

function setPet() {
    var pet = `cat`;
    console.log(`Pet outside the house is: ${pet}`)
}

setPet();
console.log(`Pet outside the house is: ${pet}`)

var index = 0;
for (var index = 0; index < 5; index++) {
    console.log(`var Index inside the Loop: ${index}`);
}
console.log(`var Index outside the Loop: ${index}`);

//let
let indexWithLet = 0;
for (let indexWithLet = 0; indexWithLet < 5; indexWithLet++) {
    console.log(`let Index inside the Loop: ${indexWithLet}`);
}
console.log(`let Index outside the Loop: ${indexWithLet}`);

//const
const value = `I am constant`;
console.log(`Variable says: ${value}`)

const obj = {
    foo : "foo"
};

obj[`bar`] = "bar";

console.log("Object state can be mutated:", obj);