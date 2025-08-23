---
sidebar_position: 4

title: Components
description: Components in React
---

Components are building blocks that make up a webapp.

## Types of Components.

Components can be categorized into 3 categories.

1. Stateless/presentational components.
   - No State.
   - Can Recieve Props and present the data.
   - Usually small and reusable.
1. Stateful components.
   - Have State.
   - Can be reusable.
1. Structural components.
   - Pages, Layouts, or screens of the application.
   - Result of composition.
   - Can be huge and non reusable.

## How to Split UI into Components.

First iteration to figure out if Components should be split up is by size.

- Large Size means that there could be many responsibilities, might need too many props, hard to reuse.
- If the component is too small, then that means too much abstraction, confusing codebase and more files to maintain.
- General Idea is to strike a proper balance between the both, ensuring it is easy to read the codebase and comprehend it.

## Framework of when to create a new component.

**The 4 criteria for splitting UI is**

1. Logical Separation of content and Layout.
1. Reusability.
1. Responsibilites/complexity.
1. Personal coding style.

When there is a relatively big component, then split into smaller component as and when necessary.

### Few questions to ask yourself.

1. Does the component contain pieces of content and layout that dont belong together?
1. is it Possible to reuse part of the component?
1. Do you want or need to reuse it?
1. Is the component doing too many things?
1. Does the component rely on too many props?
1. Does the component have too many pieces of state?
1. Is the code, too complex to read?

## Component Composition.

Combining different components using the children prop is component composition.
It is often used to create reusable and flexible components, fix prop drilling.
Often is used for layouts etc. this is possible due to components not needing to know their children in advance.

```jsx live noInline title="Component example"
function Card({ title, children }) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '400px',
      }}
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function UserInfo({ name, email }) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
}

function App() {
  return (
    <Card title='User Profile'>
      <UserInfo name='John Doe' email='John@example.com' />
    </Card>
  );
}

render(<App />);
```
