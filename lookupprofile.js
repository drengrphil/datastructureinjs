// Look up a name in contact list.
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

/* 
 * Function looks through object to find if a name exists
 * if it does, checks if that contact has a property,
 * if it does, return the property of that contact.
 */
function lookUpProfile(name, prop){
// Only change code below this line
for (var k = 0; k < contacts.length; k++){
    if (contacts[k].firstName == name)
    {
        // Name exists
        if (contacts[k].hasOwnProperty(prop)){
            return contacts[k][prop];
        } else {
            return "No such property"
        }
    }
}

return "No such contact";
// Only change code above this line
}

// Test 1
console.log(lookUpProfile("Akira", "likes"));
// Test 2
console.log(lookUpProfile("Kristian", "lastName"));

// Loop through array of an object
function searchContact(nameKey){
    for (var k = 0; k < contacts.length; k++){
        // Search by last name property.
        if (contacts[k].lastName === nameKey){
            return contacts[k];
        }
    }
    return "Contact Not Found. " + nameKey;
}

console.log(searchContact("Vos"));

// Passing the object to function
function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

var array = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

var resultObject = search("string 1", array);
console.log(resultObject);

// Random Number generator
function randomNumGen(){
    var randomNum = 0;
    randomNum = Math.random();
    return randomNum;
}

console.log("Random Num: " + randomNumGen());

// Random whole number between 0 and 9
function randomWholeNumber(){
    return Math.floor(Math.random()*10);
}

console.log("Whole Number: " + randomWholeNumber());

// Random Number generation within a range
function randomRange(min, max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

console.log("Range Number: " + randomRange(10, 20));

// Parsing a string using parseInt()
function convertStringToInt(strVal){
    var intValue = parseInt(strVal);
    return intValue;
}

console.log(convertStringToInt("89"));

// parseInt with Radix (integer between 2 and 36)
function convertToIntWithRadix(str){
    var a = parseInt(str, 2);
    return a;
}

// 11 is in binary system or base 2 and "11" = 3.
console.log("Radix Num: " +convertToIntWithRadix("11"));

// Conditional operator or ternary operator as one line if-else
function findGreater(a,b){
    return a > b ? "a is greater" : "b is greater";
}

// Similar to
function findGreaterVersion2(a,b){
    if (a > b){
        return "a is greater";
    } else {
        return "b is greater";
    }
}

// Multiple ternary operator
function findGreaterOrEqual(a, b){
    return (a === b) ? "a and b are equal"
        :  (a > b) ? "a is greater"
        :  "b is greater";
}

// Check number sign
function checkSign(num) {
    return (num > 0) ? "positive" : (num == 0) ? "zero" : "negative";
}
  
checkSign(10);

// Countup with recursion
function countupRecurisvely(n){
    if (n < 1){
        return [];
    } else {
        const countArray = countupRecurisvely(n - 1);
        countArray.push(n);
        return countArray;
    }
}

console.log(countupRecurisvely(5));

// Countdown recursively
function countdownRecurisvely(n){
    if (n < 1){
        return [];
    } else {
        const countArray = countdownRecurisvely(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countdownRecurisvely(10));