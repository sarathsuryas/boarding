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
  
    detectCycle(startVertex,visited) {
      const queue = []
      let count = 0
      visited[startVertex] = true
      queue.push([startVertex,-1])
      while (queue.length > 0) {
        const [currentNode,parent] = queue.shift()
        debugger
        console.log('currentNode',currentNode)
        debugger
        console.log('parent',parent)
        for (const adjacent of this.adjList.get(currentNode)) {
          debugger
          console.log('adjacent',adjacent)
           if(!visited[adjacent]) {
            visited[adjacent] = true
            queue.push([adjacent,currentNode])
           } else if(parent!== adjacent) {
            count++
           }
        }
      }
      return count
    }
    isCycle() {
      const visited = {}
      for (const vertex of this.adjList.keys()) {
         if(!visited[vertex]) {
       const result =   this.detectCycle(vertex,visited)
       if(result > 0) {
        return result
       }
          
      }
      return false
    }
  }
  }
  // Example usage
  const graph = new Graph(7);
  
  graph.addVertex('a');
  graph.addVertex('b');
  graph.addVertex('c');
  graph.addVertex('d');
  graph.addVertex('e');
  
  
  graph.addEdge('a', 'c');
  graph.addEdge('a', 'b');
  graph.addEdge('b', 'd');
  graph.addEdge('b', 'e');
  graph.addEdge('c', 'e');
  graph.addEdge('d', 'e');
  
  
  // graph.printGraph();
  
  // Check for cycles
  console.log(graph.isCycle())
  