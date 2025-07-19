---
sidebar_position: 1

title: Linear Search
description: Linear Search, logic and code
---

Linear search is a simple search, where we visit each element in the array. Once the element is found, then return it. Can be done either from the start or the end.


## Pseudocode.
- Accept an array and a value.
- Loop through the array and check if the current array element is equal to the value
- If it is equal to value, return the index at which element is found.
- If the value is not found, return -1.

## Time Complexity.
- Best Case is O(1) 
- Average Case and Worst Case is O(N), where N is the size of the array


```javascript title='Linear Search'
function linearSearch(arr, val){
    for(let i =0; i<arr.length; i++){
        if(arr[i]===val){
            return i;
        }else{
            i++;
        }
        return -1;
    }
}
```