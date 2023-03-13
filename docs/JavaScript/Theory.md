---
sidebar_position: 3

title: Theoretical JS
description: Introduction to JavaScript
---

# Theory of JavaScript

## JavaScript Engine

- JavaScript engine is a program that executes JavaScript code.
- One of the well known JS engines are the Google' V8 engine.
  - Powers Chrome and NodeJs.
- Every engine contains a **Call Stack** and **Heap**.
  - The Call stack is where the code is executed.
  - Contains the execution context.
  - Heap is where all the objects are stored in memory.
  - It is a unstructured memory pool.
- Js is a Just-in-time compiled language.
  - that means the code in compiled and instantly interpreted.

## Just-in-time Compilation process

- When the code enters the engine, it is first parsed.
  - It is parsed into **Abstract syntax tree** (AST).
    - _Takes all the values that make sense to the language and stored in a structured manner_-
- The AST is then compiled into machine code which is instanly executed.
  - This execution happens in the Call stack of the engine.
  - This program is optimized again and again, the unoptimized code is replaced or discarded.
  - This makes JS fast. Different engines do this different ways of optimization.

## JavaScript Runtime

- JavaScript runtime contains of the JS engine and Browser. (most common)
  - JS engine ,WEB API's, Callback Queues are components of the run time.
  - Web API's provide functionality to the engine and are accessible on the window object.
  - Callback queues are a datastructure that contains all callback functions ready to be executed.
    - Callback functions are called when the callstack is empty. This happens due to the eventloop.
    - This is how the non-blocking concurrency model.
- NodeJs is similar but instead of Web API's there are C++ bindings and thread pools.

## Execution Context & Call Stack

- After compilation. A Global execution context is created for the top level code. Top level code is the code that is called. (Not function definitions)
- Execution context is an abstract concept, an environment where JS is executed.
- Only one global execution context is created by default.
- Once the top level code is executed, each function call gets its own execution context that is stored within the global context.

### Contents of execution context

1. Scope Chain : How to organise the variables.
1. Variable Environment : Contains all variables, functions and argument objects.
1. _this_ keyword.

:::caution

Arrow functions **don't** have their own argument objects and _this_ keyword. However they can use the closest regular functions _argument object_ and _this_ keyword.

:::

### Scope & Scope chain

- Scope is the space or environment where a certain variable is declared.
  - Can be **global**,**function** and **block** scope.
- Scoping controls how the variables of the program are organised and accessed.
  - JavaScript is **Lexically** scoped.
  - This means that the scoping is determined by the placement of functions and blocks in the code.
- Global scope is for the top level code. (outside any function or block)
  - Accessible everywhere.
- Function scope is for accessibility inside the function.
  - Also called local scope.
- Block scope is accessible inside the block. (ES6 feature)
  - only apply to `let` and `const`.
  - functions are block scoped when used with strict mode.
- Scope chain is the ability to look up to the parent scope for missing variables.
  - Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).

### Variable Environment

- Variables are created through a mechanism called **Hoisting**.
  - Hoisting is making available types of variables accessible in the code before they are actually declared.
  - The code is scanned for variable declarations and created in the _variable environment_.
- It does not work the same for all.

|                                         | Hoisted                                 | Initial Value     | Scope    |
| --------------------------------------- | --------------------------------------- | ----------------- | -------- |
| `function` Declaration                  | Yes                                     | Actual Function   | Block    |
| `var` variables                         | Yes                                     | Undefined         | Function |
| `let` & `const`                         | No                                      | Uninitalized ,TDZ | Block    |
| `function` expression & arrow functions | depends if used with var or let / const |

- **_TDZ_** is Temporal dead zone. It is the state where variables are un-reachable.
  - They are in scope but they aren't declared.
  - Makes it easier to avoid and catch errors.
  - Makes const variables work.

```js
const myName = 'Steve';
if (myName === 'Steve') {
  // highlight-start
  console.log(`Steve is a ${job}`);
  const age = 2023 - 2001;
  console.log(age);
  //highlight-end
  const job = 'programmer'; //highlighted area is the TDZ for job
}
```

### _this_ keyword

- It is a special variable created for every execution context.
  - It takes the value(points to) of the owner of the function in which it exists.
- Its value is not static.
- Value depends on how the function is called and value is assigned when the function is called.

#### this keyword & its behaviour with different methods

|                 | value of _this_                               |
| --------------- | --------------------------------------------- |
| Method          | Object calling the method                     |
| Simple function | undefined                                     |
| Arrow functions | _this_ of surrounding function (Lexical this) |
| Event listener  | DOM element that the handler is attached to   |

## Call Stack

- This is the place where all the execution contexts get stacked on top of each other.
- This keeps track of where the execution has reached.
- Once the code is executed and the function returns its contents. It is popped out of the call stack.
