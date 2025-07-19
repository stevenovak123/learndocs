---
sidebar_position: 4

title: Insertion Sort
description: Insertion Sort Logic and Code.
---

Builds up the sort by gradually creating a larger left portion which is always sorted.

## Pseudocode

- Start by picking the second element in the array (index 1).
  - Set `currentValue` to `arr[1]`.
- If `arr[1]` is smaller than `arr[0]`, `shift` arr[0] to the `right`.
- Continue to the next element and if it is in the incorrect position, iterate through the sorted portion (elements before it), shifting elements to the right, until the correct position is found for the current element.
- While `j >= 0 and arr[j] > currentValue`, shift arr[j] to arr[j + 1].
- Place the current element in its correct position.
- Set `arr[j + 1] = currentValue`.
- Repeat this process for all elements from index 1 to the end of the array.
- The array will be sorted when the loop finishes.

## Time Complexity
- Best Case is O(n).
- Average and Worst Case is O(n<sup>2</sup>)

```js title='Insertion Sort'
function insertionSort(arr) {
  let i, j;
  for (i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}
```
