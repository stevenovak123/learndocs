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

## First Class and Higher Order functions

JavaScript treats functions as simple values as they are another "type" of objects.
Hence we can store functions in variables or in properties. This is a **concept** that is available in different coding languages.
Higher Order function is a function that recieves another function as an argument, that returns a new function or both. Returning function is also called a **callback**

```js title="Functions as values"
//Example:1
const add=(a,b)=>a+b;
//Example:2
const counter ={
    value:234,
    increment: function(){
        this.value ++1
        }
}
```

We can pass functions as arguments to other functions, return functions from functions and call methods on functions.

```js title="Versatility of functions"
const greet = () => {
  console.log("Hello, How are you");
  // Higher Order function
  btn.addEventListener("click", greet); //greet is the function that will be called
};
//Function return another function
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}
```

```js title="Callback functions/ Higher order functions"
function manipulateString(str, logString) {
  // Convert the string to uppercase
  const upperCaseStr = str.toUpperCase();
  // Call back with the manipulated string
  logString(upperCaseStr);
}

// Callback function to log the manipulated string
function logManipulatedString(manipulatedStr) {
  console.log("Manipulated String:", manipulatedStr);
}

// Call the function with callback
manipulateString("hello world", logManipulatedString); // Output: HELLO WORLD
```

:::note
Function returning a function is possible due to closures.
:::

```js title="Function returning another function"
function greet(greeting) {
  // The returned function takes a name and returns a greeting message
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

// Usage of the function
const greetHello = greet("Hello");
console.log(greetHello("Alice")); // Output: Hello, Alice!
console.log(greetHello("Bob")); // Output: Hello, Bob!

const greetGoodbye = greet("Goodbye");
console.log(greetGoodbye("Charlie")); // Output: Goodbye, Charlie!
console.log(greetGoodbye("David")); // Output: Goodbye, David!
```

## Call, Apply and Bind methods

The `call`, `apply`, and `bind` are methods in JavaScript used to manipulate the `this` context of functions and to invoke functions with a specific this value. They are often used in object-oriented programming and functional programming paradigms

The `call()` method calls a function with a given this value and arguments provided individually.

The `apply()` method is similar to `call()`, but it accepts arguments as an array.

:::note
The apply method is not often used in modern JS.  
In Modern JS, it is written as `book.call(thisKeyword, ...Array)`
:::

The `bind()` method creates a new function that, when called, has its this value set to a specific value.

```js title="Call, Apply, Bind method"
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

// Using call
const fullName1 = person.fullName.call(person1, "Oslo", "Norway");
console.log(fullName1); // Output: John Doe, Oslo, Norway

const fullName2 = person.fullName.call(person2, "Paris", "France");
console.log(fullName2); // Output: Jane Doe, Paris, France

// Using apply
const fullName3 = person.fullName.apply(person1, ["Oslo", "Norway"]);
console.log(fullName3); // Output: John Doe, Oslo, Norway

const fullName4 = person.fullName.apply(person2, ["Paris", "France"]);
console.log(fullName4); // Output: Jane Doe, Paris, France

// Using bind
const fullNameFunc1 = person.fullName.bind(person1);
console.log(fullNameFunc1("Oslo", "Norway")); // Output: John Doe, Oslo, Norway

const fullNameFunc2 = person.fullName.bind(person2);
console.log(fullNameFunc2("Paris", "France")); // Output: Jane Doe, Paris, France
```
## Immediately Invoked Function Expressions (IIFE)

Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. It is a **design pattern** typically used to create a local scope for variables to prevent them from overriding or polluting the global scope.

```js title="IIFE"
(function(){
  console.log("Immediately invoked")
})();
(()=>{console.log("Immediately invoked")})();
```

## Closures

It is a closed-over variable environment of the execution context in which a function was created, even after the execution context is gone. It gives a function access to all the variables of its parent function, even after the parent function has returned. The function keeps a reference of its outer scope, which preserves the scope chain throughout time.

:::info
Closures are not created manually, it happens automatically in certain situations and we need to identify it. 
:::

```js title="Closure"
function createCounter() {
  let count = 0;

  return function() { 
    count++; // The inner function has access to the outer function's variables
    return count;
  };
}

const counter = createCounter(); 

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

const anotherCounter = createCounter(); // A new instance of the counter
console.log(anotherCounter()); // Output: 1
console.log(anotherCounter()); // Output: 2
```