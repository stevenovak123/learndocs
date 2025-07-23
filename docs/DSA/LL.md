---
sidebar_position: 2

title: Linked List
description: Details about linked lists.
---

Linked list is a list of data, it consists of nodes. Each node has a value and a pointer. Pointer points to the next node or null.

- Head keeps track of the start of the linked list.
- Tail keeps track of the end.
- Length tells the length of the node.

There are two types of linked lists.

- Singly linked lists.
- Doubly linked lists.

Singly linked means only keeps track of the next node where as doubly means keeps track of the previous node as well.

## Properties of Linked lists.

- push - Add a new node.
- pop - Remove a node.
- shift - Removing a new node from the beginning of the linked list.
- unshift - Adding a new node to the beginning of the linked list.
- get - retrieve the number at that index/position.
- set - update/change the value of a node based on its position in the linked list.
- insert - add a new node at a position in the linked list.
- remove - remove a node from the linked list at a specific position.
- reverse - reverse a linked list.

## Code Implementation.

### Singly Linked List.

```js title='Singly Linked list'
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); //boolean conversion
    if (index === 0) return !!this.unshift(val); //boolean conversion
    let prev = this.get(index - 1);
    let newNode = new Node(val);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index <= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  // this is created just to view the linked list
  print() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.val);
      current = current.next;
    }
    console.log(array);
  }
}
```


