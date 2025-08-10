---
sidebar_position: 3

title: Selection Sort
description: Selection Sort Logic and Code.
---

Find the smallest value in the entire array and then place the smallest value first into its sorted position. 

## Pseudocode
- Loop through the array from index 0 to the second-last index:
    - Set `lowest` to the current index `i`
    - Loop through the remaining elements (from `j=i+1` to the last index):
        - Compare the `element[lowest]` with the current element:
            - If the current element is smaller, update `lowest` to the current index `j`
    - After the inner loop, if `lowest` is not the same as `i`:
        - Swap the element at `i` with the element at `lowest`
- Return the sorted array

## Time Complexity
- Best, Average and Worst Case  is O(n<sup>2</sup>), where n is the size of the array. 
- 


```js title='Selection Sort'
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
```