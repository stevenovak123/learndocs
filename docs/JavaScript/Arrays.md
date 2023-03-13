---
sidebar_position: 6

Title: Arrays
Description: Information on Arrays in JavaScript
---

# Arrays

Array is a datastructure.
It is big container in which we can throw variables and store them together.
There are different ways that an array can be created

Example

```javascript
// literal syntax
const friends = ['Steve', 'Peter', 'Paul'];
const years = new Array(1991, 1984, 2001, 2003);
```

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

## Array Destructuring

- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays into distnct variables.
  - The original array is not affected.
  ```js
  let a, b;
  [a, b] = [10, 20];
  console.log(a); // output => 10
  ```

## Spread operator & Rest pattern

- Spread operators helps in spreading the array into a single variable.
  - Syntax is `[...]`.
  - It expands an array into its elements.
  ```js
  const arr = [7, 6, 8];
  const newArr = [1, 2, 3, ...arr];
  console.log(newArr); //output=> 1,2,3,7,6,8
  ```
  - It helps creates a shallow copy of the array.
  - Join 2 or more arrays.
- **Rest pattern** has the same syntax.
  -It is used to pack all elements in an array.
  -Used on the left of the assignment.
  - It must be the last element.
  - Only 1 rest pattern in an assignment.
  ```js
  const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
  console.log(a, b); //output => 1,2
  console.log(others); // output => 3,4,5,6
  ```

## for-of loop

- This is new way of looping over arrays.
- It lets you loop over iterables.
- It gives you the value.

```js
const items = ['Steve', 'Dsouza', 'JavaScript'];
for (const name of item) {
  console.log(name);
} // ouput=> Steve Dsouza JavaScript
```
