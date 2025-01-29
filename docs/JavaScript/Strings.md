---
sidebar_position: 4

Title: Strings in JS
Description: Information on Strings and Template Literals in JS
---

# Strings and Template Literals

## Strings

A JavaScript string is zero or more characters written inside quotes.

```javascript
let text = "Steve Dsouza";
```

You can use single or double quotes.

```javascript
let carName1 = "Ferrari";
// prettier-ignore
let carName2 = 'Toyota';
```

_the comment prettier-ignore is for the formatter to abide by my IDE rules_.

Quotes can be used inside a string, as long as they don't match the quotes surrounding the string.

```javascript
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

String characters can be accessed like accessing an index of an array

```js
let airplane = "Airbus 380";
console.log(airplane[2]); // output=> r
```

## Template Literals

Template is an easier way to write strings and insert variables in them. This came with ES6. They make use of back-tics (**` `` `**).

```javascript
let text = `Hello World !`;
```

> Example using `+` to concat strings

```javascript
const name = "Steve";
const job = "programmer";
const age = 22;
const sentenceWithString =
  name + " is " + "a " + job + " and is " + age + " years old.";
console.log(sentenceWithString);
//output=> Steve is a programmer and is 22 years old
```

> Example with Template literals

```javascript
const name = "Steve";
const job = "programmer";
const age = 22;
const sentenceWithLiteral = `${name} is a ${job} and is ${age} years old `;
console.log(sentenceWithLiteral);
//output=> Steve is a programmer and is 22 years old
```

The use of `${}` to enter values is called interpolation. Interpolation is the automatic replacing of variables with real values.

## String Methods

A few String methods are as follows.

### length

returns the length of the string.

```javascript
let text = "STEVE";
let length = text.length;
console.log(length); // output => 5
```

### slice(start, end)

Returns the extracted part as a new string (end is not included).

```javascript
let text = "Mango, Banana, Pear";
let part = text.slice(14, 19);
console.log(part); // output => Pear
```

- If the second param is omitted, the method will slice till the end of string.

```javascript
let text = "Mango, Banana, Pear";
let part = text.slice(6);
console.log(part); // output => Banana, Pear
```

- If the parameter is negative then, the positions are counted from the end.

```javascript
let text = "Mango, Banana, Pear";
let part = text.slice(-12, -6);
console.log(part); // output => Banana
```

### substring(start, end)

It is similar to`slice()`; the difference being the start and end value less than 0 are treated as 0.

- If you omit the second parameter, .`substring()` will slice out the rest of the string.

### substr(start, length)

It is similar to `slice()`; The difference is that the second parameter specifies the length of the extracted part.

```javascript
let text = "Mango, Banana, Pear";
let part = text.slice(7, 6); //output => Banana
```

- If you omit the second parameter, .`substr()` will slice out the rest of the string.

```javascript
let text = "Mango, Banana, Pear";
let part = text.slice(14);
console.log(part); // output => Pear
```

- If the parameter is negative then, the positions are counted from the end.

```javascript
let text = "Mango, Banana, Pear";
let part = text.slice(-12);
console.log(part); // output => Banana, Pear
```

### replace()

Replaces a specified value with another value in a string. It returns a new string

```javascript
let text = "Please visit the office";
let newText = text.replace("the", "Deloitte");
console.log(newText); // output=>"Please visit Deloitte office"
```

- It does not change the string it is called on.
- It replaces only the first match.
- It is case sensitive.
- Can use regular expressions (Written without quotes).

### replaceAll()

Replaces all the strings to be replaced. Similar to `replace()`

```javascript
let text = "I love cats. Cats are very easy to love. Cats are very popular.";
replacedText = text.replaceAll("Cats", "Dogs");
console.log(replacedText);
//output =>I love dogs. Dogs are very easy to love. Dogs are very popular.
```

### toUpperCase() & toLowerCase()

Converts strings to upper case and lower case .

```javascript
let text = "Hello world";
console.log(text.toUpperCase()); //output=> HELLO WORLD
console.log(text.toLowerCase()); //output=> hello world
```

### indexOf()

Returns the index of the argument passed. Will return -1 if nothing is found.

```js
let airline = "TAP Air Portugal";
console.log(name.indexOf("r")); // output=> 6
console.log(name.lastIndexOf("r")); // output=> 10
console.log(name.index("Portugal")); //output => 8
```

- It returns the first match of the index
- It is case sensitive.
- Can be used to find whole words.

### at()
Returns the value at the argument passed.
```js
let airline = "TAP Air Portugal";
console.log(airline.at(0)) // output =>T
````