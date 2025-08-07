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

## Implementation

Below implementation with undirected graphs.

```js title='Graph with Adjacency list'
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
}
```
