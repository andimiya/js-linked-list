function linkedListGenerator(){

  let head = null;

  function getHead() {
    return head;
  }

  function getTail() {
    let currentNode = head;

    while (curentNode !== null){
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      else {
        return currentNode;
      }
    }
    return currentNode;
  }

  function add(newValue) {
    let newNode = {
      value: newValue,
      next: null
    };
    let tail = getTail();

    if(head === null) {
      head = newNode;
    }
    if(head !== null){

    }

    return newNode;
  }

  function remove() {

  }

  function get() {

  }

  function insert() {

  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  }
}