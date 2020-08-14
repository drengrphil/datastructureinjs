/*
 * Stack is a data structure with Last In Firt Out (LIFO) operations
 */
class StackImplementation{
    constructor(){
        // Implemented storage using array.
        this.stackContents = [];
    }

    push(inputData){
        // Use array.push feature
        this.stackContents.push(inputData);
        return this;
    }

    pop(){
        // Return top of stack
        return this.stackContents.pop();
    }

    printStackContents(){
        let iter = 0;
        while (iter < this.stackContents.length){
            console.log(this.stackContents[iter]);
            iter++;
        }
    }
};

// Usage
const assert = require('assert');

const stackStorage = new StackImplementation();
stackStorage.push('a');
stackStorage.push(240);
stackStorage.push([1, 2, 3]);
stackStorage.push('egg');

console.log(stackStorage);
stackStorage.pop(); // pop top of stack
console.log(stackStorage);
stackStorage.printStackContents();