---
sidebar_position: 2

title: Binary Search
description: Binary Search, logic and code
---

Binary search is a much faster form of search. Rather than eliminating one element at a time, we eliminate half of the remaining elements at once. **Works only on sorted arrays**

## Pseudocode.
- Accept an array and the item to search.
- initialize `start` (0) and `end` as `(array.length-1)`. Can be called left and right as well
- While the `start is less than end AND middle is not the item.` 
    - Find the` midpoint` of the array. Can use this formula. `(start + (end-start))/2`
    - Check if the` item is before or after` the midpoint.
    - If `item is before midpoint`, then update `end to midpoint -1.` 
    - else if `item is after midpoint`, update `start to midpoint +1`.
    - return middle if value is found.
    - If value is not find return -1.


## Time Complexity.
- Best Case is O(1).
- Average Case and Worst Case is O(log n), where n is the size of the array




```js title='Binary Search'
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2); //Math.floor(left +(right-left)/2)

  while (arr[middle] !== value && left <= right) {
    if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
    // Optional middle= Math.floor(left +(right-left)/2)
  }

  return arr[middle] === value ? middle : -1;
 
}

```