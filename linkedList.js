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
    let tail = getTail();
    let newNode = {
      value: newValue,
      next: null
    };

    if (head === null) {
      head = newNode;
    }
    else if (head === tail) {
      head.next = newNode;
    }
    else if (tail.next === null) {
      tail.next = newNode;
    }

    console.log(head.next, 'head')


    return newNode;
  }


  function get(Number){
    let currentNode = head;

    for (var i = 0; i < Number; i++) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return false;
      }
    }
    return currentNode;

    //start at the head node
    //check if value matches Number
      //if found return that node
      //if not found, move to the next node via current node's .next property
    //Repeat until .next is null(tail/end of list)



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
console.log(ll.get(2));
// ll.add('kitten');
// ll.add('puppy')
// ll.add('lamb')
// var newLinkedList = ll.getTail();
// console.log(getHead(), 'getHead');
// console.log(getTail(), 'getTail');