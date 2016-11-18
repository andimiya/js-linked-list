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
    var currentNode = head;
    return currentNode;
  }

  function add(Value) {
    //create a
    // var head =
    // var newNodeA = {
    //   value: Value,
    //   next: null
    // };
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