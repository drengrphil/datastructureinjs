// Hash map operations
// Maps, dictionaries and associative arrays all describe the same abstract data types
// Hashtable is a data structure that maps keys to values.
// Search time: O(1)
// HashMaps uses keys that are string, number, object or anything.
//    internally, Hashmap uses an array and it maps the labels to array
//    indexes using a hash function.
// ways to implement hashmap:
//   1. Array: use a hash function to map a key to the array index value.
//           worst:  O(n)  average:  O(1).
//   2. Binary Search Tree: using a self-balancing search tree to look up for values
//           worst:  O( log n)    average:   O ( log n)
// The overral goal of hashmap is to reduce the search/access time of an Array 
//    from O(n) to O(1)
/*
 * Naive implementation.
 * Drawback: Hash function generates many duplicates leading to collisions.
 * collisions are not handled.
 */
class SimpleNaiveMap{
    constructor(bucketCapacity = 20){
        this.buckets = new Array(bucketCapacity);
    }

    /* Set entry (key value pair)
     * @param {any} key
     * @param {any} value
     */
    setPair(key, value){
        const index = this.getIndex(key);
        return this.buckets[index] = value;
    }

    /* 
     * Get value given key
     * @param {any} key
     */
    getValue(key){
        const index = this.getIndex(key);
        return this.buckets[index];
    }

    // Compute has code
    hashFunc(key){
        return key.toString().length;
    }

    /*
     * Improved hash function
     * Instead of using length of the key.
     * Using char specific UNICODE, words with same string length could
     * have unique hashValue generated for them.
     */
    improvedHashFunc(key){
        let hashValue = 0;
        const keyValueString = key.toString();
        for (let index = 0; index < keyValueString.length; index++){
            // Get Unicode value for a character at index.
            const keyCodeChar = keyValueString.charCodeAt(index);
            // Add specific unicode
            hashValue += keyCodeChar;
        }
        return hashValue;
    }

    /*
     * Another improved hash function
     * To resolve issue of key values having the same sum UNICODES
     * Solves the drawback of improvedHashFunc
     * Drawback: Different values types still return the same hash code.
     */
    hashFuncUsingUnicode(key){
        let hashValue = 0;
        const keyValueString = `${key}`;
        for ( let index = 0; index < keyValueString.length; index++){
            const keyCodeChar = keyValueString.charCodeAt(index);
            hashValue += keyCodeChar << (index * 8);
        }
        return hashValue;
    }

    /*
     *  To resolve the drawback of hashFuncUsingUnicode to handle
     *  different value types:
     *  hashFuncUsingUnicode(1) -> 49 and hashFuncUsingUnicode('1') -> 49
     *  Solution: take into account the key type.
     */
    hashFuncUnicodeKeyType(key){
        let hashValue = 0;
        const keyValueString = `${key}${typeof key}`;
        for ( let index = 0; index < keyValueString.length; index++){
            const keyCodeChar = keyValueString.charCodeAt(index);
            hashValue += keyCodeChar << (index * 8);
        }
        return hashValue;
    }

    // Get index
    getIndex(key){
        // const indexHash = this.hashFunc(key);
        const indexHash = this.hashFuncUnicodeKeyType(key);
        const index = indexHash % this.buckets.length;
        return index;
    }
}

/*
 * Application
 */
const assertEqual = require('assert');
const storageHashMap = new SimpleNaiveMap();
// Insert some values to the map
// key: playerName value: GoalScored
storageHashMap.setPair('messi', 106);
storageHashMap.setPair('ronaldo', 98);
storageHashMap.setPair('xavi', 65);
// mikel overrites messi - length with same word
storageHashMap.setPair('mikel', 45);
// strings with same letters still end in collision with 
// using improvedHashFunc: rat and art have same unicode 327
storageHashMap.setPair('art', 1001);
storageHashMap.setPair('rat', 1002); // overrides art due to key collision.
// Hashcodes without key types
/*console.log("----- Hashcodes without key types: -----");
console.log(storageHashMap.hashFuncUsingUnicode('1, 2, 3'));
console.log(storageHashMap.hashFuncUsingUnicode([1, 2, 3]));
console.log(storageHashMap.hashFuncUsingUnicode('1'));
console.log(storageHashMap.hashFuncUsingUnicode(1));
// Hashcodes with key types
console.log("----- Hashcodes with key types: -----");
console.log(storageHashMap.hashFuncUnicodeKeyType('1, 2, 3'));
console.log(storageHashMap.hashFuncUnicodeKeyType([1, 2, 3]));
console.log(storageHashMap.hashFuncUnicodeKeyType('1'));
console.log(storageHashMap.hashFuncUnicodeKeyType(1));*/
//console.log(storageHashMap.hashFuncUnicodeKeyType('art'));
// console.log(storageHashMap.hashFuncUnicodeKeyType('rat'));
// key of different types should not collide.
storageHashMap.setPair('1, 2, 3', "Gold");
storageHashMap.setPair([1, 2, 3], "Silver"); // overrides entry with key: '1, 2, 3'
console.log(storageHashMap.buckets);

/*
 *
 * Better Implementation
 * Hash function: that checks types and character orders to minimize collisions.
 * Handle collisions: append value to list and use counter to keep track of them.
 */
class ImprovedHashMap{
    constructor(bucketCapacity){
        this.buckets = new Array(bucketCapacity);
        this.collisions = 0;
    }

    setValuePair(key, value){
        // Get index for a value entry.
        const bucketEntryIndex = this.getKeyIndex(key);
        if(this.buckets[bucketEntryIndex]){
            this.buckets[bucketEntryIndex].push({key, value});
            if ( this.buckets[bucketEntryIndex].length > 1){ this.collisions++;}
        } else {
            this.buckets[bucketEntryIndex] = [{key, value}];
        }
        return this;
    }

    // Get key
    getPairKey(){
        const bucketEntryIndex = this.getKeyValueIndex(key);
        for ( let index = 0; index < this.buckets[bucketEntryIndex].length; index++){
            const newValueEntry = this.buckets[bucketEntryIndex][index];
            if (newValueEntry.key === key){
                return newValueEntry.value;
            }
        }
    }

    // Compute hashcode
    hashFunction(key){
        let hashValue = 0;
        const keyValueStringType = `${key}${typeof key}`;

        for (let i = 0; i < keyValueStringType.length; i++){
            const charKeyCode = keyValueStringType.charCodeAt(i);
            hashValue += charKeyCode << (i * 8);
        }
        return hashValue;
    }

    getKeyIndex(key){
        const hashKeyIndex = this.hashFunction(key);
        const keyIndex = hashKeyIndex % this.buckets.length;
        return keyIndex;
    }
};

const assert = require('assert');
const ourDataMap = new  ImprovedHashMap(100);

ourDataMap.setValuePair('act', 2);
ourDataMap.setValuePair('rat', 7);
ourDataMap.setValuePair('dog', 1);
ourDataMap.setValuePair('art', 8);

console.log('Collisions: ', ourDataMap.collisions);
console.log('Map Content:');
console.log(ourDataMap.buckets);

/*
 *
 * Optimal implementation, which allows the hash map to resize based on a load factor.
 * This is called Rehash (Adjust bucket size based on load factor). 
 * Load factor measures how full a hash map is.
 * Load factor = number of items / the bucket size.
 */
class OptimizedHashMap{
    constructor(initBucketCapacity = 16, loadFactor = 0.75){
        this.buckets = new Array(initBucketCapacity);
        this.loadFactor = loadFactor;
        this.bucketSize = 0;
        this.collisions = 0;
        this.keys = [];
    }

    hashFunction(key){
        let hashValue = 0;
        const keyValueString = `${key}${typeof key}`;

        for (let j = 0; j < keyValueString.length; j++){
            const keyCodeChar = keyValueString.charCodeAt(j);
            hashValue += keyCodeChar << (j * 8);
        }
        return hashValue;
    }

    getBucketIndex(key){
        const hashValue = this.hashFunction(key);
        const bucketIndex = hashValue % this.buckets.length;
        return bucketIndex;
    }

    // Get loadFactor
    getLoadFactor(){
        return this.bucketSize / this.buckets.length;
    }

    // Rehash function
    rehashFunction(newBucketCapacity){
        const newCapacityMap = new OptimizedHashMap(newBucketCapacity);
        this.keys.forEach(key => {
            if (key){
                newCapacityMap.setValuePair(key.content, this.getKey(key.content));
            }
        });

        // Update bucket
        this.buckets = newCapacityMap.buckets;
        this.collisions = newCapacityMap.collisions;
        this.keys = newCapacityMap.keys;
    }

    getKeyIndexes(key){
        const bucketIndex = this.getBucketIndex(key);
        const values = this.buckets[bucketIndex] || [];

        for (let entryIndex = 0; entryIndex < values.length; entryIndex++){
            const entryValue = values[entryIndex];
            if (entryValue.key === key){
                return {bucketIndex, entryIndex}
            }
        }
        return {bucketIndex};
    }

    setValuePair(key, value){
        const {bucketIndex, bucketEntryIndex} = this.getKeyIndexes(key);

        if (bucketEntryIndex === undefined){
            // Create new bucket (array).
            // Key Index tracking
            const keyIndex = this.keys.push({content: key}) - 1;
            this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
            this.buckets[bucketIndex].push({key, value, keyIndex});
            this.bucketSize++;
            // Collision counter
            if (this.buckets[bucketIndex].length > 1){
                this.collisions++;
            }
        } else {
            // Override existing value.
            this.buckets[bucketIndex][bucketEntryIndex].value = value;
        }

        // Is rehash time
        if ( this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor){
            // Rehash
            this.rehashFunction(this.buckets.length * 2);
        }
        return this;
    }

    // Delete a key.
    deleteKey(key){
        const {bucketIndex, entryIndex, keyIndex} = this.getKeyIndexes(key);
        if (entryIndex === undefined){
            return false;
        }

        this.buckets[bucketIndex].splice(entryIndex, 1);
        delete this.keys[keyIndex];
        this.bucketSize--;

        return true;
    }

    getKey(key){
        const {bucketIndex, bucketEntryIndex} = this.getKeyIndexes(key);
        if ( bucketEntryIndex === undefined){
            return;
        }
        return this.buckets[bucketIndex][bucketEntryIndex].value;
    }

    containsKey(key){
        return !!this.getKey(key);
    }
};

// const assert = require('assert');
const hashMap = new OptimizedHashMap();

assert.equal(hashMap.getLoadFactor(), 0);
hashMap.setValuePair('songs', 2);
hashMap.setValuePair('pets', 7);
hashMap.setValuePair('tests', 1);
hashMap.setValuePair('art', 8);
assert.equal(hashMap.getLoadFactor(), 4/16);

hashMap.setValuePair('Pineapple', 'Pen Pineapple Apple Pen');
hashMap.setValuePair('Despacito', 'Luis Fonsi');
hashMap.setValuePair('Bailando', 'Enrique Iglesias');
hashMap.setValuePair('Dura', 'Daddy Yankee');

hashMap.setValuePair('Lean On', 'Major Lazer');
hashMap.setValuePair('Hello', 'Adele');
hashMap.setValuePair('All About That Bass', 'Meghan Trainor');
hashMap.setValuePair('This Is What You Came For', 'Calvin Harris ');

assert.equal(hashMap.collisions, 2);
assert.equal(hashMap.getLoadFactor(), 0.75);
assert.equal(hashMap.buckets.length, 16);

hashMap.setValuePair('Wake Me Up', 'Avicii'); // <--- Trigger REHASH

assert.equal(hashMap.collisions, 0);
assert.equal(hashMap.getLoadFactor(), 0.40625);
assert.equal(hashMap.buckets.length, 32);

console.log("Buckets of optimized map: ");
console.log(hashMap.buckets);

/* ------- Using Map container in modern JavaScript -------- */

function insertMap(map, key, value){
    map.set(key, value);
    return map;
}

const dataMap = new Map();
insertMap(dataMap, 'word', 1); // Runtime O(1), rehash takes O(n)
insertMap(dataMap, 'age', 37);
console.log(dataMap);