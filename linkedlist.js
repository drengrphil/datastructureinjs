/*
 * | data: 2 | next | --->  | data: 5 | next | ---> | data: 8 | next: null |
 * Operations: 
 *    1. addLast:      append element to end of list
 *    2. removeLast:   deletes element to the end of the list
 *    3. addFirst:     adds element to the beginning of list
 *    4. removeFirst:  removes an element from the start 
 */
class node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/*
 * Singly linked lists. Every element has reference to the next
 *    starting at the root.
 */
class SinglyLinkedList {
    constructor(){
        // Head/Root - first element
        this.root = null;
        this.size = 0;
    }

    /*
     * Add an element to the list
     *    adding to the root is O(1)
     *    finding last element is O(n)
     */
    addLast(value){
        // Create new node
        const newNode = new node(value);
        if (this.root){
            // Add next to root.
            let currentNode = this.root;
            // Find the last element and append to it.
            while (currentNode && currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        } else {
            this.root = newNode;
        }
        this.size++;
    }

    /*
     * Remove last element from the list.
     *    Find last element and set reference to it to null
     *    O(n) - runtime because we iterate until second to the last element.
     */
    removeLast(){
        let currentNode = this.root;
        let tempNode;

        if (currentNode && currentNode.next){
            while (currentNode && currentNode.next && currentNode.next.next){
                currentNode = currentNode.next;
            }
            // Element being deleted.
            tempNode = currentNode.next;
            // Remove reference to the last element.
            currentNode.next = null;
        } else {
            this.root = null;
            tempNode = currentNode;
        }

        if (tempNode){
            this.size--;
            return tempNode.value;
        }
    }

    /*
     * Add to the beginning of list.
     * O(1) runtime
     */
    addFirst(value){
        const newNode = new node(value);
        newNode.next = this.root;
        this.root = newNode;
        this.size++;
    }

    /*
     * Remove first element
     * Runtime: O(1)
     */
    removeFirst(){
        const firstNode = this.root;
        if (firstNode){
            // Make next the root
            this.root = firstNode.next;
            this.size--;
            return firstNode.value;
        }
    }

    /* 
     *
     * Remove element anywhere in the list.
     */
    removeAnywhere(index = 0){
        if (index === 0){
            // Remove the root element
            return this.removeFirst();
        }

        for (let currentNode = this.root, i = 0; currentNode; i++, currentNode = currentNode.next){
            if (i = index){
                // Is the last element?
                if (!currentNode.next){
                    return this.removeLast();
                }
                currentNode.previous = currentNode.next;
                this.size--;
                return currentNode.value;
            }
        }
    }

    /*
     * Search for element
     */
    searchList(value){
        for (let currentNode = this.root, index = 0; currentNode; index++, currentNode = currentNode.next){
            if (currentNode.value === value){
                return index;
            }
        }
    }
}

// Application
const studentData = new SinglyLinkedList();
studentData.addLast('yam');
studentData.addLast('tea');
studentData.addLast('egg');
studentData.addLast('sugar');
// Root
console.log(studentData);
// Next to root.
// console.log(studentData.root.next);
console.log("------- Remove last -----------");
studentData.removeLast();
console.log(studentData);

console.log("----- Add to first -------");
studentData.addFirst('egusi');
console.log(studentData);

console.log("---- Remove first element ---- ");
studentData.removeFirst();
console.log(studentData);

console.log("---- Remove anywhere in the list -----");
studentData.removeAnywhere(1);
console.log(studentData);

console.log("---- Search element in list -----");
console.log(studentData.searchList('egusi')); // undefined, not in list.

// For doubly linked list implementation
const DoublyLinkedList = require('./doublylinkedlist');

console.log("****************** Doubly Linked List: ************************ ")
const newDlinkedList = new DoublyLinkedList();

console.log("----- Add Root ----- ");
newDlinkedList.addRoot('walk');
console.log(newDlinkedList);

console.log("----- Add to tail ----- ");
newDlinkedList.addToTail('school');
console.log(newDlinkedList);

console.log("----- Add to list in any position ----- ");
newDlinkedList.addElementAnywhere('to', 1);
console.log(newDlinkedList);

console.log("---- View all values ------ ");
newDlinkedList.printDoublyLinkedListValues();

console.log("----- Remove from tail ----- ");
newDlinkedList.removeFromTail();
console.log(newDlinkedList);
newDlinkedList.removeFromTail();
console.log(newDlinkedList);

// export default DoublyLinkedList
module.exports = DoublyLinkedList;