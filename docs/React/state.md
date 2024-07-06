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
