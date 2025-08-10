---
sidebar_position: 7

title: Graphs
description: Details about Graphs.
---

Graph is a data structure that is a collection of nodes and its connections.

It consists of vertex - a node, edge - connections between them.

Graphs are used in social networks, locations, routing algorithms, file system optimization etc.

There are types of graphs.

- Undirected graph : An undirected graph is a graph where edges do not have a specific direction, meaning connections go both ways.
- Directed graph: A graph in which edges have a direction, i.e., the edges have arrows indicating the direction of traversal.
- Weighted graph: Has units on the edges. Often used with algorithms to know shortest path.

## Adjacency matrix

An adjacency matrix is a 2D matrix `A` of size `n × n`, where n is the number of vertices in the graph. The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph.

## Adjacency List

An adjacency list is a common way to represent graphs. In this structure:

- Each vertex stores a list of adjacent vertices.
- It's typically implemented using an array (or dictionary) of lists.
- It is very efficient for sparse graphs, where the number of edges is much less than the square of the number of vertices.

## Time Complexity between Adjacency List and Adjacency Matrix

| Feature              | Adjacency List | Adjacency Matrix |
| -------------------- | -------------- | ---------------- |
| **Add Vertex**       | O(1)           | O(V<sup>2</sup>) |
| **Add an Edge**      | O(1)           | O(1)             |
| **Remove Vertex**    | O(V + E)       | O(V<sup>2</sup>) |
| **Remove an Edge**   | O(E)           | O(1)             |
| **Edge Lookup Time** | O(V + E)       | O(1)             |
| **Storage**          | O(V + E)       | O(V<sup>2</sup>) |

:::note
V is the number of vertices and E is the Edges of the graph
:::


## Graph Traversal

Graph traversal is the process of visiting all the nodes (or vertices) in a graph, typically to search or explore the structure. The two main types of graph traversal are **Depth-First Search (DFS) and Breadth-First Search (BFS).**

In DFS, you start from a node and explore as far as possible along each branch before backtracking.
In BFS, you explore all the neighbors of a node before moving on to their neighbors.

### Pseudocode Depth First Traversal
There is a recursive and an iterative solution. both will give a different order.

- The function should take a starting node.
- Create a list to store the end result.
- Create an object to store visited vertices.
- Create a helper function which accepts a vertex
  - This helper function should return early if the vertex is empty.
  - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
  - Loop over all of the values in the adjacency list for that vertex.
  - If any of those values are not listed/visited, recursively invoke the helper function with that vertex.

### Pseudocode Breadth First Traversal

- The function should take a starting node.
- Create a queue and place the starting vertex in it.
- Create an array to store the nodes visited.
- Create an object to store visited vertices.
- Mark the starting vertex as visited.
- Loop as long as there is anything in the queue.
- Remove the first vertex from the queue and push it into the array that stores the nodes visited.
- Loop over each vertex in the adjacency list for the vertex you are visiting.
- If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex.
- Return the array of visited nodes.




## Implementation

Below implementation with undirected graphs.
```js title='Graph implementation'
// * Undirected
// * not doing error handling
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  // recursive
  depthFirstTraversal(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    //IIFE. Can do without IIFE as well
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  // Iterative.
  dfsIterative(start) {
    let stack = [start];
    let visited = {};
    let currentVertex;
    let result = [];
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList(currentVertex).forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
```