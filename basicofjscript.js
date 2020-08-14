// Comment in JavaScript
/*
 * Multiline Comment
 */

// Global variable
var gloVariable = 7;

function testFunction(gloVariable)
{
    gloVariable += 10;
    return gloVariable;
}

var result = testFunction(gloVariable);
console.log(result);

// Strict comparison operator
// == attempts to convert both values being compared to a common type.
// === does not perform type conversion. Compares both data type and values.
if (3 === 3)
{
    console.log("Strictly Equal");
}

// This line will never print.
if (3 === '3')
{
    console.log("Not strictly")
}

// Determine the type of a variable.
console.log((typeof gloVariable)); // gloVariable is a number

// Strictly inequality
if (gloVariable !== '7') // !== does not convert data types.
{
    console.log("One is a string and the other is a number");
}

function valueRange(val)
{
    if (val < 10 || val > 20)
    {
        console.log("Outside");
    }
    else
    {
        console.log("Inside");
    }
}

valueRange(25);

lowercaseLetter = "a";
// Switch Statement
switch(lowercaseLetter){
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
}

// Multiple identical options
val = 10;
switch(val){
    case 1:
    case 2:
    case 3:
        console.log("1, 2, or 3");
        break;
    case 4:
        console.log("4 figures");
        break;
    default:
        console.log("6 figures");
        break;
}

// Return undefined keyword
a = -1;
b = -8;
function testUndefined(a, b)
{
    if (a < 0 || b < 0)
    {
        return undefined;
    }
    return "Correct";
}

console.log(testUndefined(a,b));

// JavaScript Objects
// Objects are useful for storing data in a structured way.
// In example below, properties are "name", "legs", and "tails"
var cat = {
    "name": "Whiskers", // string
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"] // array of string literals.
};
// Access an object
var propVal = cat.legs;
console.log("Number of legs: "+ propVal);

// Specifying property name without quotes, JavaScript will typecast it
// string.
var anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

// Access object using square bracket.
var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

var retrievedObj = myObj["NoSpace"];
console.log(retrievedObj);

// Access object using variable

var dogs = {
    Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};

var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);

// Update value of an object property.
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};

ourDog.name = "Happy Camper" // or ourDog["name"] = "Happy Camper";
console.log(ourDog.name);

// Add new property
ourDog.bark = "bow-wow"; // or ourDog["bark"] = "bow-wow"
console.log(ourDog.bark);

// Delete property from an object.
delete ourDog.bark;

// Use object for lookup
var result = "";
function lookUpObject(val)
{
    var result = "";
    // Data to search
    var dataStore = {
        "age": 6,
        "name": "James",
        "address": "Lagos",
        "sex": "Female"
    };

    result = dataStore[val];
    return result;
}

result = lookUpObject("name");
console.log(result);

// Complex Data Structure
// Flexible - stores combinations of strings, numbers, booleans, arrays
// functions and objects.
// JavaScript can be used for Complex Data Structure.
// JavaScript Object Notation or JSON is a related data interchange format used to
// store data.
var ourMusic = [
    // One object
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold":true
    },

    // Another object
    {
        "artist": "Drunker Punk",
        "title": "HunkyTunk",
        "release_year": 2010,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold":false
    }
];

// Accessing Nested array
var ourPets  = [
    {
        animalType: "cat",
        names:[
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names:[
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

ourPets[0].names[1]; // Fluffy
ourPets[1].names[0]; // Spot

// while loop
var k = 5;
var myArray = [];
while (k >= 0)
{
    myArray.push(k);
    k--;
}

// For loop
for (var i = 0; i < 5; i++)
{
    console.log(myArray[i]);
}

// Store Odd numbers from 1 through 9 in array.
var OddNums = [];
for (var k = 1; k < 10; k += 2)
{
    OddNums.push(k);
}

// Count backward
// 9 to 1 [9, 7, 5, 3, 1]
var backWardCounter = [];
for (var k = 9; k < 9; k -= 2)
{
    backWardCounter.push(i);
}

// Sum of array elements.
var myArr = [2, 3, 4, 5, 6, 7, 8];
var totalNum = 0;
for (var k = 0; k < myArr.length; k++)
{
    totalNum += myArr[k];
}
console.log(totalNum);

var arr = [
    [1,2], [3,4], [5,6]
];
for (var k = 0; k < arr.length; k++){
    for (var j = 0; j < arr[k].length; j++){
        console.log(arr[k][j]);
    }
}

// Multidimensional
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var k = 0; k < arr.length; k++){
      for (var j = 0; j < arr[k].length; j++){
        product *=  arr[k][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
multiplyAll([[1,2],[3,4],[5,6,7]]);

var ourArray = [];
var k = 0;
do{
    ourArray.push(k);
    k++;
} while (k < 5);


// Using recursion instead of loops.
function multiply(arr, n){
    if (n <= 0){
        return 1;
    } else {
        return multiply(arr, n-1) * arr[n-1];
    }
}

// Sum of n terms recursively
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0){
      return 0;
    } else {
      return sum(arr, n-1) + arr[n-1];
    }
    // Only change code above this line

}  