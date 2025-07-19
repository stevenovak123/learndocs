---
sidebar_position: 7

title: Radix Sort
description: Radix Sort Logic and Code.
---

Radix sort is an integer sorting algorithm that works by sorting numbers digit by digit, starting from the least significant digit (LSD) or most significant digit (MSD). It does not compare the actual values of the numbers, but instead uses the digit positions to organize them. Larger numbers have more digits, which determines their order in the sorting process. This method is efficient for sorting large sets of integers. Assumption is Base 10 numbers.

## Pseudocode.

- This sort requires multiple helper functions.
  - we need to implement a helper function to get digit and the place value of it.
  - we need to implement a helper function to get the most number of the digit.
  - we need to implement a helper function to get the number of digits in the largest number int the list.
- Define a function that accepts list of numbers.
- Using helpers figure out how many digits the largest number has.
- Loop from `k=0` up to this largest number of digits.
- for each iteration of the loop:
  - create a bucket for each digit.
  - place each number in the corresponding bucket, based on the _k_ th digit.
- replace the existing array with values in our bucket and return it.

## Time Complexity.
- Best, Average and Worst Case is O(nk). k is the size/number of digits.

```js title='Radix Sort'
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```
