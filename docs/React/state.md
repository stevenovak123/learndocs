---
sidebar_position: 3

title: State
description: State in React
---

# State

## What is State?

State is data that a component can hold over time necessary for information that it needs to remember throughout the app lifecycle. **It is the memory of the component.**
Updating a piece of state will cause a trigger to re-render the component.
This allows developers to update the component view, persist local variables between renders.

Example of state

```jsx live
function App() {
  const [data, setData] = useState(0);
  const handleIncrement = () => {
    setData((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setData((prevCount) => prevCount - 1);
  };
  return (
    <>
      <p>value of state: {data} </p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
```

We are using _setState_, like _setCount(prevCount => prevCount + 1)_, ensures that you're always working with the latest state, no matter when the update is actually applied by React.  
While _setCount(count + 1)_ might work in simple cases, using _setCount(prevCount => prevCount + 1)_ is safer and more reliable, especially in more complex scenarios or in cases where you're dependent on the current state.

## Types of State

There are two types of state, **local** & **global**.

- Local state might be needed by one or few components.
  - It is defined in a component and only that component and child components have access to it.
- Global state is might be needed for several components
  - Shared state that is accessible to every component in the entire application.

### Tips on deciding if state is needed or not

while building applications, new state should be created after answering a few preliminary questions such as,

1. Is there a need to store the data?
2. Will the data change at some point?
3. Can it be computed or derived from the exisiting props or state?
4. Should it re-render component? **if no, use refs**

Questions like where to place the state can be answered using the below questions

1. Is it only used by the current component?
2. Will it be used by the Child component?
3. Used by one or few sibling components?

### Derived State

State that is computed from an existing piece of state or from props. Below is an example of derived state.

:::note
if cart items and total price were given its individual state then that would be tough to maintain and would cause re-renders everytime it changes.
:::

```js live title='example of derived state'
function App() {
  const [cart, setCart] = useState([
    { name: 'Js', price: 10 },
    { name: 'Java', price: 15 },
  ]);
  const numItems = cart.length;
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
  return (
    <>
      <p>Number of items in cart {numItems}</p>
      <p>Total Price {totalPrice}</p>
    </>
  );
}
```
