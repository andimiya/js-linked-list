/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

var head = null;

  function getHead() {
    return head;
  }

  function getTail() {

    let currentNode = head;

    //if head is null, then tail is head

    //if head is not null, then find the node that has .next null

    while (currentNode !== null) {
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      else {
        return currentNode;
      }
    }
    return currentNode;
    console.log(currentNode, 'currentNode')
  }

  function add(newValue) {

    let newNode = {
      value: newValue,
      next: null
    };

    let tail = newNode;

    if (head === null) {
      head = newNode;
    }



    // else if (newNode.next === null) {
    //   newNode.next = newNode;
    // }

    return newNode;
  }

  //each time add fires,
  //get the previous newNode.next
      //if newNode.next === null, then
      //change newNode.next to newNode Value
  //change the previous newNode.next to newNode's new Value

  function get(Number){

  }

  function remove(Number) {
  }

  function insert(Value, Number) {
  }


  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };

}


var ll = linkedListGenerator();
console.log(ll.add(12));
console.log(ll.add(13));
console.log(ll.add(14));

// ll.add('kitten');
// ll.add('puppy')
// ll.add('lamb')
// var newLinkedList = ll.getTail();
// console.log(getHead(), 'getHead');
// console.log(getTail(), 'getTail');