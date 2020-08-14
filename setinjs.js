// Implementation of set
const assert = require('assert');
const HashMap = new Map();

class SetImplementation{
    constructor(){
        this.hashMap = new Map();
    }

    // Add Value.
    addValue(value){
        this.hashMap.set(value);
    }

    // Does set contains value.
    containValue(value){
        return this.hashMap.has(value);
    }

    // Get map size.
    getSize(){
        return this.hashMap.size;
    }

    deleteValue(value){
        return this.hashMap(value);
    }

    setEntries(){
        return this.hashMap.keys.reduce((acc, key) => {
            if (key !== undefined){
                acc.push(key.content);
            }
            return acc
        }, []);
    }
}

const ourDataSet = new SetImplementation();
/*ourDataSet.setEntries('one');
ourDataSet.setEntries('uno');
ourDataSet.setEntries('one'); // Duplicate will not be added.

assert.equal(ourDataSet.containValue('one'), true);
assert.equal(ourDataSet.containValue('dos'), false);
assert.equal(ourDataSet.size, 2);*/

/* --------- JavaScript built-in Set -------- */
const setData = new Set();
setData.add('joy');
setData.add('happiness');
setData.add('wealth');
setData.add('joy'); // Duplicate, should not add.

assert.equal(setData.has('joy'), true);
assert.equal(setData.has('happiness'), true);
assert.equal(setData.has('wealth'), true);

assert.equal(setData.size, 3);
console.log(setData);