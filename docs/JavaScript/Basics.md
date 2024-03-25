---
sidebar_position: 2

Title: Basics of JS
Description: Information on Primitives
---

# Basics of JavaScript

## Variables and Values

A variable is a holder for a representation of a value.

Value is the smallest piece of information that is stored in memory. There are two types of values in JS. They are either objects or primitive values

## Data types of JavaScript

There are **7** primitve data types in JavaScript.They are:

1.  **Number**: Floating point numbers. Used for decimals and integers
1.  **String**: Sequence of characters. Used for text. Can be wrapped in `' '` or ` " "`
1.  **Boolean**: Logical type that can only be `true` or `false`
1.  **Undefined**: Value of a variable that is not defined. eg: `let steve;` this will hold undefined
1.  **Null** : Empty value
1.  **BigInt**: Large numbers that cannot be held by Number
1.  **Symbol**: Immutable and unique

## Variable Declaration

There are 3 types of variable declaration in Javascript.

- var: allows mutating. Avoid using
- let: allows mutating.
- const: use when the value is to not be mutated.
  - Initial value is required.
  - Good practice to use this as first option.

If there is no keyword before declaring a variable then the variable will be declared in the global scope.

Code Snippets for the same

```javascript
let name;
// will return undefined
let age = 22;
// used let as age changes
const birthYear = 2001;
// used const as birthYear doesnt change

// Global declaration
openSource = 'This project is open source';
console.log(openSource); //output => This project is open source
```

## Operators

There are many categories of operators:

1. **Arithmetic Operators**
1. **Assignment Operators**
1. **Comparison Operators**
1. **Logical Operators**
1. **Conditional Operators**
1. **Type Operators**

Their precendence can be found on the table present in [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

### Arithmetic Operators

These operators are used for arthimetic (mathematic) operations.

| Operator | Description                    |
| -------- | ------------------------------ |
| +        | Addition                       |
| -        | Subtaction                     |
| \*       | Multiplication                 |
| \*\*     | Exponent (Raised to the power) |
| /        | Division                       |
| %        | Modulo (Division Remainder)    |
| ++       | Increment                      |
| --       | Decrement                      |

### Assignment Operators

These operators are used to assign a values. They follow right hand assignment i.e the value on the right is assigned to the left. Below are short hands of it as well

| Operator | Example  | Same as     |
| -------- | -------- | ----------- |
| =        | x = y    | x = y       |
| +=       | x += y   | x = x + y   |
| -=       | x -= y   | x = x - y   |
| \*=      | x \*= y  | x = x \*y   |
| /=       | x /= y   | x= x/y      |
| %=       | x%y      | x= x%y      |
| \*\*=    | x \*\*=y | x= x \*\* y |

`+` can also be used to concatenate strings

```javascript
let text = 'What a wonderful ';
text += 'day it is';

console.log(text); // output => What a wonderful day it is
```

### Comparison Operators

| Operator | Description                       |
| -------- | --------------------------------- |
| ==       | Equal to                          |
| ===      | Equal value and Equal type        |
| !=       | Not equal                         |
| !==      | Not Equal value or not equal type |
| >        | Greater than                      |
| \<        | Less than                         |
| >=       | Greater than or equal to          |
| \<=       | Less than or equal to             |
| ?        | Ternary operator (checks boolean) |

### Logical Operators

| Operator | Description |
| -------- | ----------- |
| &&       | logical AND |
| \|\|     | logical OR  |
| !        | logical NOT |

- They can be use any data type, return any data type.
- Often used for short-circuiting.

  ```js title="Short-circuiting for || (OR)"
  console.log(3 || 'Steve'); // output =>3
  console.log('' || 'Steve'); //output => Steve
  // Evaluates the first expression and returns it if true and ignores the second expression.
  //Else returns second.
  ```

  ```js title="Short-circuiting for && (AND)"
  console.log(0 && 'Steve'); //output =>0
  console.log(7 && 'Steve'); //output => Steve
  // Evaluates till first false value is found.
  // Else continues till expression is true.
  ```

- The OR operator returns false when compared with 0 or `' '`.
  - The Nullish Coalesing Operator overcomes this pitfall.
  - It treats only null and undefined as false.
  ```js
  const restaurantGuests = 0;
  const guests = restaurantGuests ?? 10;
  console.log(guests); // output=>0
  ```
- Logical operators can be combined with assignment operators as well to assign values.

### Type Operators

| Operator   | Description                                             |
| ---------- | ------------------------------------------------------- |
| typeof     | Returns the type of variable                            |
| instanceof | Returns true if an object is an instance of object type |
