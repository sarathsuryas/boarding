class Graph {
    constructor(noOfVertices) {
      this.noOfVertices = noOfVertices;
      this.adjList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      this.adjList.set(vertex, []);
    }
  
    // Add an edge to the graph
    addEdge(vertex, edge) {
      this.adjList.get(vertex).push(edge);
      this.adjList.get(edge).push(vertex);
    }
  
    // Print the graph
    printGraph() {
      for (const [key, value] of this.adjList) {
        console.log(key, '->', value.join(' '));
      }
    }
  
    // Helper function to detect a cycle starting from a node
    detectCycle(node, visited) {
      visited[node] = true;
      const queue = [];
      queue.push([node, -1]); // Store [current node, parent node]
  
      while (queue.length > 0) {
        const [currentNode, parent] = queue.shift();
        debugger   
        console.log("currentNode",currentNode)
        debugger
        console.log("parent",parent)  
        for (const adjacent of this.adjList.get(currentNode)) {
          if (!visited[adjacent]) {
            debugger
            console.log('adjacent',adjacent)
            visited[adjacent] = true;
            queue.push([adjacent, currentNode]);
          } else if (adjacent !== parent) {
            debugger
            console.log(adjacent)
            debugger
            console.log(parent)
            return true; // Cycle detected
          }
        }
      }
      return false; // No cycle
    }
  
    // Function to detect a cycle in the graph
    isCycle() {
      const visited = {};
      for (const vertex of this.adjList.keys()) {
        if (!visited[vertex]) {
          if (this.detectCycle(vertex, visited)) {
            return true;
          }
        }
      }
      return false;
    }
  }
  
  // Example usage
  const graph = new Graph(7);
  
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  graph.addVertex(5);
  graph.addVertex(6);
  graph.addVertex(7);
  
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 5);
  graph.addEdge(3, 4);
  graph.addEdge(3, 6);
  graph.addEdge(5, 7);
  graph.addEdge(6, 7);
  
  // graph.printGraph();
  
  // Check for cycles
  if (graph.isCycle()) {
    console.log('Cycle detected');
  } else {
    console.log('No cycle detected');
  }
  