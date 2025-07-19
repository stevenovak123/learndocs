---
sidebar_position: 6

title: Quick Sort
description: Quick Sort Logic and Code.
---

Like merge sort, Works by decomposing array into smaller arrays of 0 or 1 elements. Works by selecting one element and finding the index where the pivot should end up in the sorted array. Once the pivot is in its correct position, quick sort can be applied on either side of the pivot.



## Pseudocode.
-  In order to merge sort, implement a function responsible for arraging the array. 
    - This function should be able to arrange elements on either side of the array. It should not create a new array.
    - Consider the pivot the start of the array.
    - Store the current pivot index in a variable. 
    - Loop through the array from the start until the end.
      - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
    - Swap the starting element with the pivot index.
    - Return the pivot index.
- Call the helper function.
- When helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.

## Time Complexity.
- Best and Average Case O(n log n).
- Worst Case is O(n<sup>2</sup>).



```js title='Quick Sort'

//* Pivot helper function.
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  // swap pivot with last element that is < pivot
  swap(arr, start, swapIdx);
  return swapIdx;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left side
    quickSort(arr, left, pivotIndex - 1);
    //right side
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
```