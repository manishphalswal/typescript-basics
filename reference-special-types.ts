//void, Arrays<Type>, Tuple, Objects, enum, any(special)

//void
function display(): void {
    console.log(`Void Returning function`);
    return;
}

//Arrays
let fruits: string[];
fruits = [`apple`, "orange", 'grapes', (() => null)(), undefined];

let food: Array<string>;
food = ['pizza', 'burger'];

let genericeArr: Array<string | number | boolean>;
genericeArr = ['hello', 334, true, null, undefined, 0b0101010];


//tuple
let coordinates: [number, number, number];
coordinates = [23, 34, 5];

let mixed: [number, boolean, number];
mixed = [23, true, 5];

//Objects
let person = {
    firstName: `manish`,
    lastName: 'phalswal',
    age: 30,
    getFullname: (): string => this.firstName + ' ' + this.lastName
};

//enum
enum DaysOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY
}

let today: DaysOfWeek;
today = DaysOfWeek.MONDAY;

//any
let myUser: any = {
    firstName: `manish`,
    lastName: 'phalswal',
    age: 30
};