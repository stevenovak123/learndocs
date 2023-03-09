---
sidebar_position: 6

title: Objects in JS
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
  name: "Steve Dsouza",
  age: 22,
  motherTongue: "Konkani",
  techStack: ["HTML", "CSS", "Javascript"],
};
```

## Retrieving data from objects

### Dot & Bracket Notation

- values from objects can be retrieved using the `.` or `[]`notation
- to retrieve values with `.`, It has to be the actual property name.
- to retrieve values with `[]`,It can be computed values that correspond to the property name.
  s

```javascript
const person = {
  firstName: "ABC",
  lastName: "EFG"
  age: 22,
  motherTongue: "Konkani",
  techStack: ["HTML", "CSS", "Javascript"],
};
// using the dot notation
console.log(person.firstName); // output => ABC
//  using the bracket notatiom
const nameKey= 'Name';
console.log(person["first" + nameKey]); // output => ABC
```
