function defaultFunc(name) {
    console.log('Hello ', name);
}
var initFunc = function (name) {
    console.log('Hello ', name);
};
defaultFunc('Foo');
initFunc('Boo');
var arrowFunc = function (name) { return console.log('Hello ', name); };
var edibles1 = [
    {
        edible: 'Chicken',
        veggie: false
    },
    {
        edible: 'Salat',
        veggie: true
    },
    {
        edible: 'Mutton',
        veggie: false
    },
    {
        edible: 'Veg Burger',
        veggie: true
    },
    {
        edible: 'Paneer Tikka',
        veggie: true
    }
];
console.log('Veg Edibles:', edibles1.filter(function (edible) { return edible.veggie; }));
//this
var user1 = {
    firstName: 'Manish',
    lastName: 'Phalswal',
    age: 30,
    displayFirstName: function () {
        var _this = this;
        // setTimeout(function() {
        //     console.log('Hello ', this.firstName);
        // }, 1000)
        setTimeout(function () { return console.log('Hello ', _this.firstName); }, 1000);
    }
};
user1.displayFirstName();
//# sourceMappingURL=arrowfunction.js.map