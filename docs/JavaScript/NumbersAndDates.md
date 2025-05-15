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
## Big Int
Big Int is a way of storing numbers greater than its MAX_SAFE_INTEGER.
All the usual operators work the same. Math functions will not work correct.
It is not possible to mix big ints with other types. Ideally the other numbers should be converted to Big Int.
Comparison and Equality will work without conversions. 

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
## Dates
There are multiple ways to create dates. All require a constructor. Months are 0 based like arrays. hence 1 is Feb and so on.
Dates can also auto correct themselves if entered incorrectly.

```js 
const now=new Date();
console.log(now) //Outputs date 
console.log(new Date('April 18 2020 12:02:31'))
console.log(new Date('April 11, 2024'))
console.log(new Date(2025,1,08,08,02,22)) // Output --> Sat 2025 Feb 08, 08:02:22
```

## Date Methods

### getFullYear();
Returns year of the date.

```javascript
const future = new Date(2027,10,19,15,23)
console.log(future.getFullYear()) //Output --> 2027
```
### getMonth()
Returns month of the date. 0 based.

```javascript
const future = new Date(2027,10,19,15,23)
console.log(future.getMonth()) //Output --> 10
```
### getDate()
Returns day of the date. Day of the month is returned

```javascript
const future = new Date(2027,10,19,15,23)
console.log(future.getDate()) //Output --> 19
```
### getDay()
Returns day of the week.

```javascript
const future = new Date(2027,10,19,15,23)
console.log(future.getDay()) //Output --> 5
```
Similarly there are `getHours()`, `getMinutes()`, `getSeconds()`.

Every `get` method also has a `set` method.
