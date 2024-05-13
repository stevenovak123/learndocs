---
sidebar_position: 5

Title: Functions in JS
Description: Information on Functions in JavaScript
---

# Functions

A function is simply a chunk of code that can be used over and over again.

```javascript
function logger() {
  console.log("My name is steve");
}
// Calling / running /invoking functions
logger();
```

The function can be called n number of times.

Function can take data and return data. This data can be in any form.

## Function decalaration

```javascript
function abcd(data) {
  return 2023 - data;
}
const declaration = abcd(2001);
```

## Function Expression

```javascript
const efgh = function (data) {
  return 2023 - data;
};
const expression = efgh(2001);
```

The difference between declaration and expression is that we can call declarations before they are defined in code. Order of `const declaration=abcd(2001)` should not matter.

## Arrow Functions

Arrow functions are just a faster way of writing functions. here return happens implicitly. (No need to mention return when its one line of code and one parameter)

```javascript
const ijkl = (data) => 2023 - data;
const arrow = ijkl(2001);
const yearsUntilRetire = (data) => {
  const age = 2023 - data;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetire(2001));
```

## Parameters in Functions

Functions can be called with arguments and without parameters. There is no binding rule that a function should be called with all its parameters in Javascript.

### Rules of Parameters in Functions

JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.

### Default Parameters

If a function is called with missing arguments (less than declared), the missing values are set to undefined.
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter. ES6 allows functions to have default values as well

```js title="parameter example"
function add(a, b) {
  return a + b;
}

// Example usage
console.log(add(5, 10)); // Output: 15
console.log(add("5", "10")); // Output: "510" (concatenation instead of addition)
console.log(add(5, 10, 15)); // Output: 15 (ignores the third argument)

function greet(name, message) {
  return `Hello, ${name}! ${message}`;
}

// Example usage
console.log(greet("Alice", "How are you?")); // Output: Hello, Alice! How are you?
console.log(greet("Bob")); // Output: Hello, Bob! undefined
```

```js title="Default param value"
function myFunction(x, y = 10) {
  return x + y;
}
//Example usage
console.log(myFunction(5)); // output: 15
console.log(myFunction(5, 11)); // output: 16
```

### Passing Arguments: Value vs References

In JavaScript, the terms `arguments` and `parameters` are often used interchangeably, but they actually refer to different things:
Parameters are the placeholders in the function declaration.
Arguments are the actual values passed to the function when it is called.

```js
function greet(name, message) {
  // name and message are parameters
  return `Hello, ${name}! ${message}`;
}
console.log(greet("Alice", "How are you?")); // "Alice" and "How are you?" are arguments
```

JavaScript passes arguments by value, meaning the function receives copies of the values, not the original variables.

```js
function changeValue(value) {
  value = 10; // Changes value only within the function
}

let num = 5;
changeValue(num);
console.log(num); // Output: 5 (num remains unchanged)
```

In JavaScript, object references are values. When you pass an object to a function, you're passing its reference.

```js
function changeProperty(obj) {
  obj.name = "Bob"; // Changes property of the object
}

let person = { name: "Alice" };
changeProperty(person);
console.log(person.name); // Output: "Bob" (property of the object is changed)
```
