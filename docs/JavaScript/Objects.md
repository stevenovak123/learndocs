---
sidebar_position: 7

title: Objects
Description: Information on Objects datastructure of JS
---

# Objects

## Objects definition

- Objects are a collection of **named values** (key value pairs)
- It is common practice to declare them with the `const` keyword.
- The named values are called **properties**.
- Order the properties don't matter.

```javascript
const person = {
  name: 'Steve Dsouza',
  age: 22,
  motherTongue: 'Konkani',
  techStack: ['HTML', 'CSS', 'Javascript'],
};
```

## Retrieving data from objects

### Dot & Bracket Notation

- values from objects can be retrieved using the `.` or `[]`notation
- to retrieve values with `.`, It has to be the actual property name.
- to retrieve values with `[]`,It can be computed values that correspond to the property name.

```javascript
const person = {
  firstName: 'ABC',
  lastName: 'EFG',
  age: 22,
  motherTongue: 'Konkani',
  techStack: ['HTML', 'CSS', 'Javascript'],
};
// using the dot notation
console.log(person.firstName); // output => ABC
//  using the bracket notatiom
const nameKey = 'Name';
console.log(person['first' + nameKey]); // output => ABC
```

## Object methods

Objects can have methods in them. As methods are just function expressions they can be stored in an object.

- There could be a possibility that a method `calcAge` can be called multiple times in the program. This would cause a lot of resource use if the function was big and complex.
- It is good practice to store the values back into the object, so it can be later accessed as a property.

```js
const person = {
  firstName: 'ABC',
  lastName: 'EFG',
  birthYear: 2001,
  motherTongue: 'Konkani',
  techStack: ['HTML', 'CSS', 'Javascript'],

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return 2023 - this.birthYear;
  },
};

console.log(person.calcAge()); // output=> 22
console.log(person.age); // output=> 22
```

## Object destructuring

- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values properties from objects, into distinct variables.
  ```js
  const object = { a: 10, b: 2 };
  const { a, b } = object;
  console.log(a); //output => 10
  ```
- We can have different variable name from the property names.
  ```js
  const person = {
    name: 'Steve',
    surname: 'Dsouza',
  };
  const { name: firstName, surname: lastName } = person;
  console.log(firstName, lastName); //output => Steve Dsouza
  ```

## Optional Chaining

- The optional chaining (?.) operator accesses an object's property or calls a function.
  - If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
- This is often used when using API's , when we don't know what are the property names.
- Can be used with arrays as well.

```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName); //output => undefined
const catName = adventurer.cat?.name;
console.log(catName); //output=> Dinah
```

## Object Keys ,values, entries

- Used to get object properties and values.
- Returns an array.

```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1)); // output=> ["a","b","c"]
console.log(Object.values(object1)); // output=>["somestring", 42, false]
console.log(Object.entries(object1));
// output => [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]
// Entries returns it as a key value pair
```
