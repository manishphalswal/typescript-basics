//Boolean, Number, String, Null, Undefined
//Boolean
let toggle: boolean;
toggle = false;
toggle = true;
toggle = null;
toggle = undefined;
console.log(`Boolean can be true/false: ${toggle}`);

//number
let num: number;
num = 500;
num = 550.0;
num = -200;
num = 0x23423;
num = 0b101010;
num = 0o21321;
num = (() => 3423)();
num = null;
num = undefined;

//string
let str: string;
str = "apple";
str = `ball`;
str = 'cat';
str = `elephant`.toUpperCase();
str = (() => "fish")();
str = null;
str = undefined;

//null
let nullVal: null;
nullVal = null;
nullVal = undefined;

//undefined
let udVal: undefined;
udVal = undefined;