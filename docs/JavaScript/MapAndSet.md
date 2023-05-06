---
sidebar_position: 8

title: Maps and Sets
Description: Information on Sets and Maps in JavaScript
---

## Map

Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. Map can also use objects as keys.

Example

```js
let map = new Map();
map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log(map.get(1)); // Output => 'num1'

let steve = { name: 'Steve' };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// Steve is the key for the map
visitsCountMap.set(steve, 123);

console.log(visitsCountMap.get(steve)); // 123
```

## Methods and Properties of Map

Methods and properties are:

- new Map() – creates the map.
- set(key, value) – stores the value by the key.
- get(key) – returns the value by the key, undefined if key doesn’t exist in map.
- has(key) – returns true if the key exists, false otherwise.
- delete(key) – removes the element (the key/value pair) by the key.
- clear() – removes everything from the map.
- size – returns the current element count.

```js
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// iterate over keys
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
```

## Set

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

The main feature is that repeated calls of `set.add(value)` with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

## Methods and Properties of Set

- new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
- set.add(value) – adds a value, returns the set itself.
- set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
- set.has(value) – returns true if the value exists in the set, otherwise false.
- set.clear() – removes everything from the set.
- set.size – is the elements count.

```js
let set = new Set();

let steve = { name: 'Steve' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// visits, some users come multiple times
set.add(steve);
set.add(pete);
set.add(mary);
set.add(steve);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // Steve Pete Mary
}
```

## Iteration over Map and Set

For looping over a map, there are 3 methods:

- keys() – returns an iterable for keys,
- map.values() – returns an iterable for values,
- map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
