function linkedListGenerator(){

  let head = null;

  function getHead() {
    return head;
  }

  function getTail() {
    let currentNode = head;
    // console.log(currentNode, 'currentNode');

    while (currentNode !== null){
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
    let tail = getTail();

    let newNode = {
      value: newValue,
      next: null
    };
    // No liist exists, create new
    if(head === null) {
      head = newNode;
    }
    // Add new node to end of existing list
    else if(tail.next === null) {
      tail.next = newNode;
    }
    return newNode;
  }

  function remove(index) {
    let previousNode = get(index-1);
    let currentNode = get(index);
    let nextNode = currentNode.next;

    if (head === null) {
      return false;
    }
    if (currentNode === false) {
      return false;
    }
    if (index === 0) {
      head = head.next;
    }
    else {
      previousNode.next = nextNode;
    }

  }

  function get(index) {

    let currentNode = head;

    if (index < 0) {
      return false;
    }

    for (var i = 0; i < index; i++) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return false;
      }
    }
    return currentNode;
  }

  function insert(value, index) {

    let previousNode = get(index -1);
    let currentNode = get(index);

    let newNode = {
      value: value,
      next: currentNode
    };



    if (index === 0) {
      head = newNode;
    }

    else if (currentNode === false){
      return false;
    }

    else if (index < 0) {
      return false;
    }
    else {
    previousNode.next = newNode;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };


}

var ll = linkedListGenerator();
console.log(ll.add('one'));
console.log(ll.add('two'));
console.log(ll.add('three'));
console.log(ll.add('four'));
console.log(ll.get(2));

