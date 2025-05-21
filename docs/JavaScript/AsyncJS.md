---
sidebar_position: 10

Title: Asynchronous JavaScript
Description: Information on Asynchronous JavaScript
---

# Asynchronous JavaScript

Asynchronous code is non-blocking and is executed after a task that runs in the background finishes.
Execution does not wait for an asynchronous task to finish its work.

Often used to make AJAX calls.
AJAX stands for Asynchronous JavaScript and XML.
It allows to communicate with remote web servers in an asynchronous way.

## Handling AJAX. (OLD way)

```js title='AJAX the old way'
const request = new XMLHttpRequest();
request.open('GET', 'API_URL');
request.send();
request.addEventListener('load', function () {
  // this code is executed after the call is done.
  console.log(this.responseText); // Here all the data of the AJAX call would be visible.

  const data = JSON.parse(this.responseText);
  console.log(data); // Data in JSON format.
});
```

This data would be posted into the html content.

## Promises.

Promises are an object used as a placeholder for the future result of an asynchronous operation. It used to contain future values (avoid callback nesting/loop). This is an ES6 feature.

This is a cleaner way to handle asynchronous code. We use the Fetch API for this.

Promises are time sensitive and have multiple stages. We can handle all the different stages through code.

1. Pending: the async task is executing or is not yet executed.
2. Settled: It has two sub stages. Fulfilled and Rejected.
   - Fulfilled: It has sucessfully resulted in a value.
   - Rejected: Error has occurred.

### Handling Promises

```JS Title="Handling Promises (Fulfilled)"
const data= function(param){
    fetch("API_URL").then(function(response){
        return response.json(); // this also results in an promise hence a then has to be appended
    }).then(function(resData){
        console.log(resData)
    })
}

```

```JS Title="Handling Promises (Rejected)"
const data= function(param){
    fetch("API_URL").then(function(response){
        return response.json();
    }).then(function(resData){
        console.log(resData)
    }).catch(error=> alert(error)) // Throws an alert that error has occurred.
}

```

```js Title="Building Promises"
function checkNumberAsync(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 0) {
        resolve('The number is positive.');
      } else {
        reject('The number is not positive.');
      }
    }, 1000); // 1 second delay
  });
}
// Using the Promise
async function runChecks() {
  try {
    const message1 = await checkNumberAsync(5);
    console.log('Success:', message1);

    const message2 = await checkNumberAsync(-3);
    console.log('Success:', message2);
  } catch (error) {
    console.error('Error:', error);
  }
}

runChecks();
```

### Promise Combinators.

Promises can be executed in parallel. This is used when Async code/ network call codes are not interdependent on each other.

The method used is `Promise.all()`.

### Promise.all()

Takes and interable of promises as input and returns a single Promise. If one of the Promises fails the whole promise will fail.

```js
async function fetchData() {
  const data = await Promise.all([
    fetch('API_URL_1'),
    fetch('API_URL_2'),
    fetch('API_URL_3'),
  ]);
  console.log(data);
}

fetchData();
```

### Promise.race()

The method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

```js
async function run() {
  const fastestResponse = await Promise.race([
    fetch('API_URL_1'),
    fetch('API_URL_2'),
    fetch('API_URL_3'),
  ]);

  const data = await fastestResponse.json();
  console.log('Fastest response data:', data);
}

run(); // ← call the function
```

### Promise.allSettled()

The method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when **all** of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

```js
function checkNumberAsync(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 0) {
        resolve(`✔️ ${num} is positive.`);
      } else {
        reject(`❌ ${num} is not positive.`);
      }
    }, Math.random() * 2000); // random delay up to 2s
  });
}

const numbers = [5, -3, 0, 7, -1];

const promises = numbers.map(checkNumberAsync);

Promise.allSettled(promises)
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} succeeded:`, result.value);
      } else {
        console.error(`Promise ${index + 1} failed:`, result.reason);
      }
    });

```
