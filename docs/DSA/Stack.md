---
sidebar_position: 3

title: Stacks and Queues
description: Details about Stacks and Queues.
---

## Stack

Follows a LIFO structure. Last In First Out.
Last Element added to the stack is the first element to be removed.

- Arrays can be used as a stack. provided LIFO is followed.
- Linked lists can be used for stacks as only the order matters and other information like index etc that array provides are not needed.

```js title='Stack implementation'
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }
  pop() {
    if (!this.first) {
      return undefined;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

