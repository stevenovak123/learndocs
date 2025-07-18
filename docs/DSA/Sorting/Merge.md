---
sidebar_position: 5

title: Merge Sort
description: Merge Sort Logic and Code.
---
Combination of merging and sorting. Works by decomposing array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

## Pseudocode.
- In order to merge sort, implement a function responsible for merging two sorted arrays. 
    - This function should not modify the params passed to it.
- This helper function, creates a new array, which is sorted and consists of all the elements in the two input arrays.
- Create an empty array, take the smallest values in each input array.
    - if the value in the first array is smaller that the value in the second array, push the value in the first array into our results and move to the next value of the first array.
    - if the value of the first array is larger than the second array, push the second array value and move on to the next value in the second array.


## Time Complexity.
- Best ,Average and Worst Case is O(n log n).

```js title='Merge Sort'
// helper function
function merge(arr1, arr2) {
  let results = [];
  let i = 0; //left pointer
  let j = 0; // right pointer
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let soln = mergeSort([10, 23, 24, 76, 73, 20, 50]);

```