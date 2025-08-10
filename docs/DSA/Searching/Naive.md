---
sidebar_position: 3

title: Naive String Search
description: Naive String Search, logic and code
---
Naive string search is a simple search. The logic is try to match strings with each other by iterating the smaller string over the bigger.


## Pseudocode
- Loop over the longer string.
- Loop over the shorter string.
- if the characters dont match, break out of the inner loop.
- if the characters match, continue.
- if you complete the innter loop and find a match, increment the count of matches.
- Return the count.


## Time Complexity
- Best Case is O(1) 
- Average Case and Worst Case is O(N), where N is the size of the array


```javascript title='Naive string search'
function naiveSearch(longString, shortString) {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (shortString[j] !== longString[i + j]) {
        break;
      }
      if (j === shortString.length - 1) {
        count++;
      }
    }
  }
  return count;
}
```