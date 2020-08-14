// For linked list implementation
const DoublyLinkedList = require('./doublylinkedlist')

/*
 * Queues are data structure with FIFO operation.
 * Enqueue ---> | c | | b | | a | ---> Dequeue
 * Two implementations: using Array or Doubly Linked List.
 */
class QueueUsingArray{
    constructor(){
        // Array im
        this.queueStorage = [];
        // For optimizedDequeue()
        this.outStorage = [];
    }

    // Add an element
    // Constant runtine O(1)
    enqueueElement(inputElem){
        this.queueStorage.push(inputElem);
    }

    // Remove element
    // Linear run-time O(n)
    dequeueElement(){
        // first-in first-out
        return this.queueStorage.shift();
    }

    // Remove element - do better than O(n)
    optimizedDequeue(){
        // That means we end up using two arrays.
        //    this.outStorage stores element to remove
        if (!this.outStorage.length){
            // This refill of outStorage
            //   takes O(n), after that the remove
            //   operation is O(1) runtime.
            while (this.queueStorage.length){
                this.outStorage.push(this.queueStorage.pop());
            }
        }
        // Now pop from stack top.
        return this.outStorage.pop();
    }
};

// Application
const queuedData = new QueueUsingArray();
queuedData.enqueueElement('server');
queuedData.enqueueElement('response');
queuedData.enqueueElement(200);
console.log(queuedData);
console.log(" ----- Pop Operation in O(n) ------ ");
queuedData.dequeueElement(); // Remove 'server' (FIFO).
queuedData.dequeueElement(); // Remove 'response' (FIFO).
console.log(queuedData);
console.log(" ----- Pop Operation in O(1) ------ ");
queuedData.enqueueElement('server');
queuedData.enqueueElement('response');
console.log(queuedData);
queuedData.optimizedDequeue(); // Remove 'server' (FIFO).
queuedData.optimizedDequeue(); // Remove 'response' (FIFO).
console.log(queuedData);


// Implementation using Doubly Linked List
class QueueUsingLinkedList{
    constructor(){
        this.queueStorage = new DoublyLinkedList();
    }

    // O(1) time
    enqueueElement(elem){
        this.queueStorage.addRoot(elem);
    }

    dequeueElement(){
        return this.queueStorage.removeFromTail();
    }

    queueSize(){
        return this.queueStorage.size;
    }
};

const queueDataLL = new QueueUsingLinkedList();
queueDataLL.enqueueElement('server');
queueDataLL.enqueueElement('response');
queueDataLL.enqueueElement(500);
console.log(queueDataLL);
console.log(" ----- Pop Operation in O(n) ------ ");
queueDataLL.dequeueElement(); // remove server
queueDataLL.dequeueElement(); // remove response
console.log(queueDataLL);
console.log("Size: " + queueDataLL.queueSize());
