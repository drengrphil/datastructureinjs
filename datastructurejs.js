// Implementation of Data structures in JavaScript.
/*
 * Arrays: collections of zero or more elements.
 *     access -> O(1) time operation because we can go straight to index of the element.
 *     access will take O(n) if we don't know the index, search through element to find it.
 *  In dynamic programming languages like JavaScript and Ruby, an array can contain different
 *     data types: numbers, words, objects, strings and even functions.
 *  Size in JavaScript increases automatically when needed.
 */

/* 
 * Insert into array using.
 */
// Append to tail -> O(1) time
function insertToTail(array, elem){
    array.push(elem); // push set new value to end of the array.
    return array;
}

// Append to head -> O(n) time
// unshift algorithm makes room for new element by moving existing ones to the
// the next position.
function insertToBeginning(array, elem){
    array.unshift(elem);
    return array;
}

// Access element -> O(1)
function accessElement(array, indx){
    return array[indx];
}

// Search for an item assuming we don't know the index of the element.
// Time complexity is O(n).
function searchOp(array, elem){
    for (let index = 0; index < array.length; index++){
        if (elem === array[index]){
            return index;
        }
    }
}

// Search for an object using key.
function searchForObject(array, objectKey){
    for (let index = 0; index < array.length; index++){
        if (array[index].a === objectKey){
            return array[index];
        }
    }
}

// Delete from an array
// Delete from end of the array -> O(1)
// Delete from beginning or middle requires moving all the elements to close gap -> O(n)
// searchOp takes O(n) splice: takes O(n) = total time O(2n), constant 2 doesn't matter.
function removeElement(array, elem){
    const index = searchOp(array, elem);
    array.splice(index, 1);
    return array;
}

/* Usage */
const array = [1, 2, 3];
// append to tail
console.log(insertToTail(array, 4));
// append to head
console.log(insertToBeginning(array, 0));
console.log(insertToBeginning(array, -1));

// access element
const mulTypeArray = [1, 'word', 3.14, {a: 1, b: 7}, {a: "NA", b: 100}];
console.log(accessElement(mulTypeArray, 2));
console.log(accessElement(mulTypeArray, 3).b);

// Search element's index in array
console.log(searchOp(mulTypeArray, 'word'));
console.log(searchOp(mulTypeArray, 3.14));
// Search for an object
console.log("---- Object Search: -----");
var searchRes = searchForObject(mulTypeArray, "NA");
console.log(searchRes);

// Remove an element
console.log("--- Remove an element ---");
console.log("Before remove: " + mulTypeArray);
console.log("after remove: " + removeElement(mulTypeArray, 'word'));

// Changing array object
console.log("----- Changing Array Object -------");
var arrayObj = [{key1:'value1', key2:'value2'},{key1:'value1', key2:'value2'}];
console.log("Before Modification: ");
console.log(arrayObj);
for(let i = 0; i < arrayObj.length; i++){
    arrayObj[i].stroke = arrayObj[i]['key1'];
    delete arrayObj[i].key1;
}
console.log("After Modification: ");
console.log(arrayObj);