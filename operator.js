"use strict";
//Spread, Destructure, Rest(...args)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Spread with Array
var fruitArr = ['Apple', 'Orange', 'Grapes'];
var meal = ['Burger', 'Pizza'];
var edibles = __spreadArray(__spreadArray([], fruitArr), meal);
console.log(edibles);
//Spread with Object
var user = {
    name: 'Manish',
    age: 30,
};
var employee = __assign(__assign({}, user), { salary: 100000 });
console.log("User Details: ", employee);
//Spread with FUnction
function add(var1, var2, var3) {
    return var1 + var2 + var3;
}
var numbers = [4, 5, 6];
console.log("Sum of arrays is : ", add.apply(void 0, numbers));
//Destructure
var name1 = employee.name, age1 = employee.age;
console.log(name1 + ', ' + age1);
var apple = fruitArr[0], orange = fruitArr[1];
console.log(apple);
console.log(orange);
//Rest(... args)
var justApple = fruitArr[0], restFruits = fruitArr.slice(1);
console.log('justApple: ', justApple);
console.log('restFruits: ', restFruits);
