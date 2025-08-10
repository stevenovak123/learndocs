---
sidebar_position: 6

title: Hash Tables/ Maps
description: Details about Hash Tables/ Maps.
---

It is a default in many programming languages.
It is used to store in key-value pairs. They are not ordered. It is fast for operations like finding, adding and removing values. the keys used can be string, unlike arrays where the key is a number.
Hash tables uses hashing functions.

A hashing function is a function that takes a key (usually a string or number) and converts it into an index, a number that tells us where to store the value in an internal array.

`char.charCodeAt(0) - 96`
is commonly used to convert lowercase alphabetic characters ('a' to 'z') into numbers from 1 to 26.

In arrays, we use numbers as indexes directly (like array[0], array[1]). But in hash tables, we want to use custom keys — like "name", "email", or "age". These are strings, and we can't use strings directly as array indexes.

Sometimes, two different keys might give the same index. This is called a **collision**.

To handle this, we can use

- Chaining: Store a list at each index and append values that collide.
- Open addressing: Find the next available empty slot.

## Time Complexity

In all cases of insertion, deletion and access are O(1). Constant time.

## Implementation

:::note
**\_** is used to denote that the function/method is private and not to be used outside of the class.

In this implmentation duplicate keys will only show the first key value pair.
:::

```js title='Hash Table implementation'
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index]; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
      return this.keyMap[index];
    }
    return undefined;
  }
}
```
