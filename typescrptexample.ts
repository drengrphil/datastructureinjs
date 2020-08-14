// Categories of types in TS
// 1. any: superset of all TS data types, meaning variable can be of any type.
//          it overrides type checking.
// 2. Built-in: types include number, string, boolean, undefined, null, and void.
// 3. User-defined: types include enum, array, interface, class, and tuple.
// Assigning a variable:
// let variableName: typeScriptType = value;

// Number - all numbers in typescript are floating-point values.
let num: number = 0.444;
let hex: number = 0xbeef;
let bin: number = 0b0010;

// Boolean
let yes: boolean = true;
let no: boolean = false;

// Array - collection of the same object.
const arr3: (Date | string[]) [] = [new Date(), new Date(), ["1", "a"]]; // Array contains Data and string

// Tuple
/* 
 * Tuples are like arrays, but we can define the type of data that are
 * are stored in each position.
 */
let numTuple: [number, boolean, number];

// Enum
// Defines set of named predefined constants.
enum GoStringEnum{
    ChoiceA = "A",
    ChoiceB = "B",
    ChoiceC = "C",
}

// String
let w = "Value1"
let x = "This is a string with the value " + w;
let y = "This is a string with value" + w;
let z = `this is a string ${w}`;
console.log(w,x,y,z)

// Variables
// Use var, let and const to define variable in TS.
// var - variable is local within function block and global-scoped outside function, this can causes error in code.
// let - solves the problem with var, sets variable's lifespan at the block where it is declared
// const - solves same problem, but variable can only be initialized once when it is declared.

// Function
function functionWithParameters(arg1: string, arg2: number){}

// OOP
// Typescript supports the use of classes using the class keyword
class class_Name{
    field;
    method;
}

// Type checking and assertions
class Dog{
    name: string;
    constructor(data: string){
        this.name = data;
    }
}

let dog = new Dog('Rover');
if (dog instanceof Dog){
    console.log(`${dog.name} is a dog`);
}

// Typeof
let myObject = { name: "test"};
let myOtherObject: typeof myObject; // borrowed type of "myObject"
myOtherObject = { name : "test2"};
type TypeFromTypeOf = typeof myOtherObject;

// Using As keyword
let str: any = 'This is a string'
let strLength = (str as string).length
let age: any = '25'
let ageNum = (age as number).toString

// <>
// to cast variables.
let str2: any = 'This is also a string'
let str2Len = (<string>str2).length