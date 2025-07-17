---
sidebar_position: 1

title: Built In JavaScript Sorting
description: Built In JavaScript Sorting
---

Sorting is the process of rearranging the items in a collection, so that the items are in some kind of order. 
JavaScript has its own sort method but does not always work the way it is expected to. It is built on Unicode values. We can use the built in comparator function to sort according to the way we want.

Comparator looks at the pairs of elements and determines their sort order based on the return value. Lets say a and b are the pair of elements then the comparator 
- if it returns a negative number, a comes before b.
- if it returns a positive number, b comes before a. 
- if it returns 0, a and b are the same as far as the sort is concerned.

example.
```js title='comparator'
function numberCompare(num1, num2){
    return num1- num2;
}
[5,6,4,15,10].sort(numberCompare)
// Output: [4,5,6,10,15]
```