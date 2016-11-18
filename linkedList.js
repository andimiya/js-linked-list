/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

var head = null;


var ll = {
  //head
  data: 1,
  next: {
    //newNode
    data: 2,
    next: {
      //tail
      data: 3,
      next: null    }
  }
};

console.log(ll.data.next, 'nextdata')

  function getHead() {

    return head;
  }

  function getTail() {
    var currentNode = head;
    console.log(currentNode, 'currentNode');
    return currentNode;
  }

  function add(head, newNode) {

    newNode = {
      data: 12,
      next: getTail.currentNode
    }

    //get the head node
    //add a newNode after the head node
    newNode.next = head.next;
    head.next = newNode;

    return newNode;
  }

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
// ll.add('kitten');
// ll.add('puppy')
// ll.add('lamb')
// var newLinkedList = ll.getTail();
// console.log(getHead(), 'getHead');
// console.log(getTail(), 'getTail');