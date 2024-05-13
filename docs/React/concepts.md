---
sidebar_position: 2

title: Core Concepts
description: Core Concepts of React
---

# Core Concepts of React

## Components

React applications are entirely made out of components. They are the building blocks of the user interfaces.

React renders a view for each component and they collectively build a user interface. Each component has its own **data**, **logic**, **appearances**.  
Hence we can build complex UIs by building multiple components and combining them. Components can be reused, nested inside each other and pass data between them. Components must return a block of JSX. We can pass properties (props) to these components and can use them to as required. 

## JSX

JSX is a declrative syntax to describe what components look like and how they work. JSX is an extension of JavaScript that allows us to embed JavaScript, CSS, and React Components into HTML

Declarative means that we need to define what the UI is supposed to look like based on current data.

Example of how Components and JSX look

```jsx live
function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

> Feel free to edit the above example. The live editor is local to you
