---
sidebar_position: 5

title: Internals of React
description: Internal Working of React
---

## Components internally.

- Components are description pieces of UI, with these components, react creates component instances.
- Component instances are physical instances of the code. It has its own state, props and lifecycle.
- The JSX is then converted to `React.createElement()` function calls.
- React element is a large immutable object.
  - It contains all the necessary information to create DOM elements.
  - They are converted to DOM elements to be displayed into screen.

### Virtual DOM.

Virutal DOM is tree of all React elements created from all instances in the component tree.
It is fast and cheap to create multiple trees.

### Reconciliation.

- Reconciliation is the process of deciding which DOM elements actually need to be inserted, deleted or updated, in order to reflect the latest state changes.
- It is done by Fiber. Fiber is the react engine of sorts.
- Fiber tree is an internal tree that has a fiber for each component instance and DOM element.
- They are not re-created on every render.
- It can work async, so it can split, prioritze, pause, reuse, or discard.
- Due to this concurrent features like Suspense or transitions can be used (React 18 onwards)

### Diffing.

Diffing is comparing elements of two different renders based on the position in the trees.
Diffing is based on 2 assumptions.

1. Two elements of different types will produce different trees.
   1. Same position , different element.
   1. Same position, same element.
1. Elements with a stable key prop stay the same across renders.

### Key Props.

- It is a prop that we use to tell the diffing algorithm that an element is unique.
- When the key stays same across the renders, the element in the DOM is not changed.
- If the key changes, element is destroyed and a new element is created.

:::tip Use Case for key props.

- Used for rendering and maintaining lists.
- Used to reset state.
  :::

## Rendering.

- When a render is triggered, React will call component functions and figures how DOM should be updated.
- Rendering here does not produce any visual changes, it figures interally what has changed.
- In the Commit phase is where the changes are written on to the DOM. The browser then displays the changes to the user.
- There are only two ways to render a trigger.
  - Initial Render of app.
  - State is updated in one or more components.
- Render happens for the entire application. It is scheduled and not immediately trigger.
- Multiple setStates are batched together.
- Then a new virtual DOM is created and reconciled with the fiber tree and is updated. Fiber tree is also known as Reconciler.
- This generates a List of DOM updates and moves it to Commit.
- Commit Phase is where React finally writes to the DOM. It is synchronous to ensure no broken UI is shown.
- Once completed, the work in progress fibre tree becomes the current tree.
- Browser then updates the user screen.
