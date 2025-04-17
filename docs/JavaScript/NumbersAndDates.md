---
sidebar_position: 9

title: Numbers and Dates
Description: Information on Numbers and Dates JavaScript
---

## Numbers

All numbers are reperesented as floating point numbers. They are stored in binary format (Base 2), therefore it is difficult to store simple fractions/decimals number.

### Conversion

We can convert strings to numbers.

```js
console.log(Number('23'));
console.log(+'23');
```

The `+'23'` works because JavaScript looks at the plus and the type coerces the string into numbers.

### Parsing

We can parse numbers as well using the parseInt method. It will try to ignore everything that is not a number. Only condition is that the number has to be starting the string. Optionally will take second argument that is the radix of the number.

```js
console.log(Number.parseInt('40px')); // 40
```

## Math Object

Math object allows you to perform mathematical tasks on numbers.
Syntax for any Math property is `Math.property`

## Math Constants

It gives 8 Mathematical constants that can be accessed as its properties

1. `Math.E` - Returns Euler's number
2. `Math.PI` - Returns PI
3. `Math.SQRT2` - Returns the square root of 2
4. `Math.SQRT1_2` - Returns the square root of 1/2
5. `Math.LN2` - Returns the natural logarithm of 2
6. `Math.LN10` - Returns the natural logarithm of 10
7. `Math.LOG2E` - Returns base 2 logarithm of E
8. `Math.LOG10E` - Returns base 10 logarithm of E

## Mathematical Methods

### Math.sqrt()

Gives square root of a number.

```js
console.log(Math.sqrt(25)); //Output -> 5
console.log(8 ** (1 / 3)); // Output -> 2 (only way to get cubic root)
```

### Math.min() & Math.max()

Gives minimum or maximum in a range of numbers passed as arguments in the function.

```js
console.log(Math.min(5, 6, 7, 2, 10)); //Output -> 2
console.log(Math.max(5, 6, 7, 3, 10)); // Output -> 520
```

### Math.round()

Returns the nearest integer

```js
console.log(Math.round(4.6)); // Output --> 5
```

### Math.ceil()

Returns the value rounded up to its nearest integer

```js
console.log(Math.ceil(4.6)); // Output --> 5
```

### Math.floor()

Returns the value rounded down to its nearest integer

```js
console.log(Math.floor(4.6)); // Output --> 4
```

### Math.trunc()

Returns the integer part of the number

```js
console.log(Math.trunc(4.6)); // Output --> 4
```

### Math.pow()

Returns the value of first argument to the power of the second.

```js
console.log(Math.pow(8, 2)); // Output --> 64
```

### Math.random()

Returns a random number between 0 (inclusive), and 1 (exclusive)

```js
console.log(Math.random()); // Output --> 0.6498898044650971
```
