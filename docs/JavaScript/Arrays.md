---
sidebar_position: 5

Title: Arrays
Description: Information on Arrays in JavaScript
---

# Arrays

Array is a datastructure.
It is big container in which we can throw variables and store them together.
There are different ways that an array can be created

> Example
>
> ```javascript
> // literal syntax
> const friends = ["Steve", "Peter", "Paul"];
> const years = new Array(1991, 1984, 2001, 2003);
> ```

Arrays are 0 indexed.

```javascript
console.log(friends[0]); // output => Steve
console.log(friends[2]); // output => Paul
```

## Array Operations

There are multiple array methods. Often used are

1. length : gives the size of the array.
1. push : adds an element to the end of the array. Returns the length of the array.
1. unshift : adds to the start of the array.
1. pop : remove the last element of the array. Returns the _popped_ element.
1. shift : remove the first element of the array. Returns the removed element.
1. indexOf : return the index at which the element is located.
1. includes : returns a boolean depending on the element being present or not. Uses strict equality `===`.

