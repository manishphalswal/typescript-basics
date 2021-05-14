//Spread, Destructure, Rest(...args)

//Spread with Array
let fruitArr = ['Apple', 'Orange', 'Grapes'];
let meal = ['Burger', 'Pizza'];

let edibles = [...fruitArr, ...meal];

console.log(edibles);

//Spread with Object
let user = {
    name : 'Manish',
    age : 30,
}

let employee = {
    ...user,
    salary : 100000
}

console.log(`User Details: `, employee)

//Spread with FUnction
function add(var1?: number, var2?: number, var3?: number) {
    return var1 + var2 + var3;
}

let numbers = [4, 5, 6];

console.log(`Sum of arrays is : `, add(...numbers));

//Destructure
let { name: name1, age: age1 } = employee;

console.log(name1 + ', ' + age1)

let [apple, orange] = fruitArr;

console.log(apple);
console.log(orange);

//Rest(... args)
let [justApple, ... restFruits] = fruitArr;
console.log('justApple: ', justApple);
console.log('restFruits: ', restFruits);
