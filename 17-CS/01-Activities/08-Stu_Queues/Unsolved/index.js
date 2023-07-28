// create the Queue class with two methods to remove and add an element
class Queue {
    constructor(container = []) {
        this.conatiner = container;
    }
    addToQueue(element) {
       return this.container.push(element);
    }
    removeFromQueue() {
       return this.container.shift();
    }
}

module.exports = Queue;
