//void, Arrays<Type>, Tuple, Objects, enum, any(special)
var _this = this;
//void
function display() {
    console.log("Void Returning function");
    return;
}
//Arrays
var fruits;
fruits = ["apple", "orange", 'grapes', (function () { return null; })(), undefined];
var food;
food = ['pizza', 'burger'];
var genericeArr;
genericeArr = ['hello', 334, true, null, undefined, 42];
//tuple
var coordinates;
coordinates = [23, 34, 5];
var mixed;
mixed = [23, true, 5];
//Objects
var person = {
    firstName: "manish",
    lastName: 'phalswal',
    age: 30,
    getFullname: function () { return _this.firstName + ' ' + _this.lastName; }
};
//enum
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["MONDAY"] = 0] = "MONDAY";
    DaysOfWeek[DaysOfWeek["TUESDAY"] = 1] = "TUESDAY";
    DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 2] = "WEDNESDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
var today;
today = DaysOfWeek.MONDAY;
//any
var myUser = {
    firstName: "manish",
    lastName: 'phalswal',
    age: 30
};
//# sourceMappingURL=reference-special-types.js.map