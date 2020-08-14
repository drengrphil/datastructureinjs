/*
 * Doubly linked List - has two references (next and previous)
 * | prev: null | data: 2 | next | --> <--| data: 5 | next | --> <--| data: 8 | next: null |
 */
class doublyLNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.root = null;
        this.tail = null;
        this.size = 0;
    }

    // Add the first element or root.
    addRoot(value){
        const newNode = new doublyLNode(value);
        newNode.next = this.root;
        if (this.root){
            this.root.prev = newNode;
        } else {
            this.tail = newNode;
        }

        // New root.
        this.root = newNode;
        this.size++;

        return newNode;
    }

    // Remove the first element
    removeRoot(){
        const root = this.root;
        if (root){
            this.root = root.next;
            if (this.root){
                this.root.prev = null;
            }
            this.size--;
            return root.value;
        } else {
            this.tail = null;
        }
    }

    // Add to tail
    addToTail(value){
        const newNode = new doublyLNode(value);
        if (this.root){
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.root = newNode;
        }

        this.size++;
        return newNode;
    }

    // Remove the tail or last element.
    removeFromTail(){
        let currentNode = this.root;
        let tempNode;
        if (currentNode && currentNode.next){
            currentNode = this.tail.prev;
            // this.tail = null;
            this.tail = currentNode;
            // node to remove
            tempNode = currentNode.next;
            currentNode.next = null;
        } else {
            this.root = null;
            this.tail = null;
            tempNode = currentNode;
        }

        if ( tempNode ){
            this.size--;
            return tempNode.value;
        }
    }

    // Add element anywhere in the linked list.
    addElementAnywhere(value, targetIndex = 0){
        if ( targetIndex === 0 ){
            return this.addRoot(value);
        }

        for ( let currentNode = this.root, index = 0; index <= this.size; index++,
            currentNode = (currentNode && currentNode.next)){
                if ( index === targetIndex){
                    if ( index === this.size){
                        // No next element
                        return this.addToTail(value);
                    }
                    const newNode = new doublyLNode(value);
                    newNode.prev = currentNode.prev;
                    newNode.next = currentNode;

                    currentNode.prev.next = newNode;
                    if (currentNode.next){
                        currentNode.prev = newNode;
                    }
                    this.size++;
                    return newNode;
                }
            }
    }

    // print all values from list
    printDoublyLinkedListValues(){
        let currentNode = this.root;
        while (currentNode != null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

module.exports = DoublyLinkedList;