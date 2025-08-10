---
sidebar_position: 2

title: Bubble Sort
description: Bubble Sort Logic and Code.
---
It is a sorting algorithm where the largest values bubble up to the top.


## Pseudocode
- Create a variable noSwap to check if any swaps are made during the pass.
- Start a loop with a variable i from the end of the array towards the beginning (i.e., starting from the last element).
- Set `noSwap = true` before each pass. This flag helps determine if any swaps are made during that pass.
- Start an inner loop with a variable j from the beginning of the array to `i-1`. 
    -This loop compares adjacent elements and performs swaps if necessary.
- if `arr[j] is greater than arr[j + 1]`, swap their positions and set `noSwap = false`.
- If no swaps were made (i.e., noSwap remains true), exit the loop early because the array is already sorted.
- Return the sorted array once all passes are done or the loop exits early.

## Time Complexity
- Best Case is O(N). 
- Average Case and Worst Case is O(n<sup>2</sup>), where n is the size of the array


```javascript title='Bubble Sort'
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

```