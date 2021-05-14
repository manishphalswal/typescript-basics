function defaultFunc(name: string) {
    console.log('Hello ', name);
}

const initFunc = function(name: string) {
    console.log('Hello ', name);
}

defaultFunc('Foo');
initFunc('Boo');

const arrowFunc = (name: string) => console.log('Hello ', name);

const edibles1 = [
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

console.log('Veg Edibles:', edibles1.filter(edible => edible.veggie));

//this

const user1 = {
    firstName: 'Manish',
    lastName: 'Phalswal',
    age: 30,

    displayFirstName(): void {
        // setTimeout(function() {
        //     console.log('Hello ', this.firstName);
        // }, 1000)
        setTimeout(() => console.log('Hello ', this.firstName),
        1000);
    }
    
}

user1.displayFirstName();
