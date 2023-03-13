---
sidebar_position: 5

Title: Functions in JS
Description: Information on Functions in JavaScript
---

# Functions

A function is simply a chunk of code that can be used over and over again.

> Example
>
> ```javascript
> function logger() {
>   console.log("My name is steve");
> }
> // Calling / running /invoking functions
> logger();
> ```
>
> The function can be called n number of times.

Function can take data and return data. This data can be in any form.

## Function decalaration

> Declaration
>
> ```javascript
> function abcd(data) {
>   return 2023 - data;
> }
> const declaration = abcd(2001);
> ```

## Function Expression

> Expression
>
> ```javascript
> const efgh = function (data) {
>   return 2023 - data;
> };
> const expression = efgh(2001);
> ```

The difference between declaration and expression is that we can call declarations before they are defined in code. Order of `const declaration=abcd(2001)` should not matter.

## Arrow Functions

Arrow functions are just a faster way of writing functions. here return happens implicitly. (No need to mention return when its one line of code and one parameter)

> Example
>
> ```javascript
> const ijkl = (data) => 2023 - data;
> const arrow = ijkl(2001);
> const yearsUntilRetire = (data) => {
>   const age = 2023 - data;
>   const retirement = 65 - age;
>   return retirement;
> };
> console.log(yearsUntilRetire(2001));
> ```
