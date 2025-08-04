---
sidebar_position: 4

title: Trees
description: Details about trees.
---

Trees are nodes that are in a parent-child relationship.

- Root: it is the top node of a tree.
- Child: it is a node directly connected to another node when moving away from the root.
- Parent: The converse of a child.
- Siblings: group nodes with the same parent.
- Leaf : A node with no children.
- Edge : The connection between one node and another.

There are types of trees.

## Binary Search Tree.

- Every parent node has at the most two children.
- Every node to the left of the parent node is always less than the parent.
- Every node to the right of the parent node is always greater than the parent

## Tree Traversal

These are independent of type of trees and can be applied across. There are two types of traversal.

- BFS.
- DFS.

### Breadth First Search (BFS).

BFS is searching across the tree on each level.

### Psuedocode BFS

- Create a queue and a variable to store the values of nodes visited.
- Place the root node in the queue.
- Loop as long as there is anything in the queue.
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the dequeued node - add it to the queue.
  - if there is a right property on the dequeued node - add it to the queue.
- Return the variable taht is storing values.

### Depth First Search (DFS)

DFS is vertically going down and searching.

- there are 3 ways of DFS
  - PreOrder: Visit the current node, then left subtree, then right subtree.
  - InOrder: Visit the left subtree, then current node, then right subtree.
  - PostOrder: Visit the left subtree, then right subtree, then current node.

### Psuedocode PreOrder DFS.

- Create a variable to store teh values of the node visited.
- Store the root of the tree in a variable called current.
- Write a helper function which accepts a node.
  - Push the value of the node to the variable that stores the values.
  - If the node has a left property, call the helper function with the left property on the node.
  - If the node has a right property, call the helper funciton with the right property on the node.
- Invoke the helper function with the current variable.
- Return the array of values.

### Psuedocode PostOrder DFS.

- Create a variable to store teh values of the node visited.
- Store the root of the tree in a variable called current.
- Write a helper function which accepts a node.
  - If the node has a left property, call the helper function with the left property on the node.
  - If the node has a right property, call the helper funciton with the right property on the node.
  - Push the value of the node to the variable that stores the values
  - Invoke the helper function with the current variable.
- Return the array of values.

### Psuedocode InOrder DFS.

- Create a variable to store teh values of the node visited.
- Store the root of the tree in a variable called current.
- Write a helper function which accepts a node.
  - If the node has a left property, call the helper function with the left property on the node.
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper funciton with the right property on the node.
  - Invoke the helper function with the current variable.
- Return the array of values.

## Tree implementation

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);

    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }
}
```
