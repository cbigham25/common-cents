// create the Stack class with two methods to remove and add an element
class Stack {
  constructor (container = []){ // this is initializing an empty array named container
    this.container = container ? container : [];
  }
  addToStack(el){
    return this.container.push[el] // returns the container and the item that we pushed to the stack
  }
  removeFromStack(){
    this.container.pop();
  }
  // refer back to the test folder for the info we made above
}

module.exports = Stack;
