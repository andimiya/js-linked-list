/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

let head = null;

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
    // console.log(currentNode, 'currentNode')
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

    // console.log(head.next, 'head')


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
    let previousNode = get(Number-1);
    let currentNode = get(Number);
    let nextNode = currentNode.next;

    console.log(currentNode, 'getNumber');

    if (head === null) {
      return false;
    }

    if (currentNode === false) {
      return false;
    }

    if (Number === 0) {
      head = head.next;
      console.log(head, 'head');
      console.log(head.next, 'headNext');
    }
    else {
      previousNode.next = nextNode;

    }

  }

  function insert(value, index) {
    let previousNode = get(index-1);
    let currentNode = get(index);

    let newNode = {
      value: value,
      next: currentNode
    };

    if (index === 0) {
      head = newNode;
    }
    else if (currentNode === false) {
      return false;
    }
    else if (index < 0) {
      return false;
    }
    else {
      previousNode.next = newNode;
    }
    // currentNode = newNode.next;

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
console.log(ll.add('cat1'));
console.log(ll.add('cat2'));
console.log(ll.add('cat3'));
console.log(ll.add('cat4'));
// console.log(ll.get(2));
// ll.add('kitten');
// ll.add('puppy')
// ll.add('lamb')
// var newLinkedList = ll.getTail();
// console.log(getHead(), 'getHead');
// console.log(getTail(), 'getTail');