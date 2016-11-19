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

    for (var i = 0; i < index; i++) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return false;
      }
    }
    return currentNode;
  }

  function getLength() {
    let length = 0;

    while (node.next !== null) {
      length++;
    }
    console.log(length, 'length');

    return length;
  }

  function insert(value, index) {
    let previousNode = get(index -1);
    let currentNode = get(index);

    let newNode = {
      value: value,
      index: index
    };

    if (index === 0) {
      head = newNode;
    }
    else if (getLength() > index) {
      return false;
    }
    else {
      previousNode.next = newNode;
      newNode.next = currentNode;
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
console.log(ll.add(1));
console.log(ll.add(2));
console.log(ll.add(3));
console.log(ll.add(4));

