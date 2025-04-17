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

## For-of loop

- This is new way of looping over arrays.
- It lets you loop over iterables.
- It gives you the value.

```js
const items = ['Steve', 'Dsouza', 'JavaScript'];
for (const name of item) {
  console.log(name);
} // ouput=> Steve Dsouza JavaScript
```

## ForEach loop
- Requires a callback function. (Higher-Order function)
- During each loop, it will execute the callback function .
- Individual item is present in each iteration.
- Can access index just by adding another variable.
- **Will always loop over the entire array.**
- Syntax is _elementName.forEach( currentElement, index, array )_

```javascript
const items =['Steve','Dsouza','JavaScript'];
items.forEach(function(item, idx, arr){
  console.log(item);
}) // ouput=> Steve Dsouza JavaScript

```
## Array Methods
  They are functions attached to Array objects. These are special built in functions that can be accessed. 

  ### Array.slice()
  We can extract the array without modifying the original array. We have to pass a start parameter, and optionally the end parameter. The end parameter is not included in the sliced array. Can use negative index to start from the end
  ```js 
  let arr=['s','t','e','v','e']
  // elements from index to till the end
  console.log(arr.slice(2))  // Output => ['e','v','e']
  // start and end 
  console.log(arr.slice(2,4)) // Output => ['e','v']
 
  ```
 ### Array.splice()
  It is similar to slice but it mutates the original array. 
  The syntax is splice(start, deleteCount, itemN)
  ```js 
  let arr=['s','t','e','v','e']
  // elements from index to till the end
  console.log(arr.splice(2))  // Output => ['e','v','e']
  // start and end 
  console.log(arr) // Output => [ 's', 't' ]
  ```
  ### Array.reverse()
  It reverses the array. It mutates the original array.

  ```js 
  let arr=['s','t','e','v','e']
  console.log(arr.reverse())  // Output => ['e','v','e','t,'s']
  ```

  ### Array.concat()
  Concatenates two arrays together. does not mutate the original array.
   ```js 
  let arr=['s','t','e','v','e']
  let arr2=['d','s','o','u','z','a']
  console.log(arr.concat(arr2))  // Output => ['s','t','e','v','e','d','s','o','u','z','a']
  ```
  ### Array.join()
  Joins the array together. Gives an output of string. 
   ```js 
  const elements = ['Fire', 'Air', 'Water'];
  console.log(elements.join('-')); // Output => "Fire-Air-Water"
  ```
  ### Array.at()
  Extracts the value at the given index
   ```js 
  const elements = [1,2,3];
  console.log(elements.at(1)); // Output => "2"
  ```
### Array.map()
- Similar to forEach. Has a callback.
- Difference is that it will create a new array of the result of the callback.
- Extremely useful, as it will create a new array with our desired options.

```js
const array = [1, 4, 9, 16];
const map1 = array.map(function(x){ return  x * 2});

//output: Array [2, 8, 18, 32]
```

### Array.filter()
Used to pick element/s that match a condition.

```js
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// output: Array ["exuberant", "destruction", "present"]
```

### Array.reduce()

Used to reduce all the elements of an array to a single value.

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// output: 10
```

### Array.find()
Retrieves the first occuring element of the array that matches the condition specified.


```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// output: 12

```

### Array.findIndex()
 Returns the index of the found element. 
```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// output: 3

```

### Arrays.findLast() & Arrays.findLastIndex()
Returns the last occuring element or last occuring index of the array that satisfies the provided testing function.


```js
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);
const isLargeNumber = (element) => element > 45;
console.log(found);
// output: 130
console.log(array1.findLastIndex(isLargeNumber))
// Output: 3
```

### Arrays.flat() & Arrays.flatMap()
Helps create new array with all sub-arrays into a specified depth (can be passed as a param)
The flatMap() method in JavaScript is used to map each element of an array using a mapping function, then flatten the result into a new array
```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [[[1, 2],3],[4,[5,6]],7,8];

const arr2 = [1, 2, 3, 4];
const result = arr2.flatMap(x => [x, x * 2]);
console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

```
### Array.sort()
It is based on strings. Sorts array alphabetically. **Mutates the original array**.
For numbers, pass a callback function to ensure that it is sorted correctly.

```js
const names = ['Steve','Adam','Martha'];
const sortedNames=names.sort()
console.log(sortedNames) // Output : ['Adam', 'Martha','Steve']

const numbers= [-20, 130, 90,40]
const sortedNumbers = numbers.sort((a,b)=> a-b);
console.log(sortedNumbers) // Output: [-20,40,90,130]
```