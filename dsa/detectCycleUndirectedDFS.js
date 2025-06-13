class Graph {
    constructor(noOfVertices) {
    this.noOfVertices = noOfVertices
    this.adjList = new Map()
    }
    addVertex(vertex) {
     this.adjList.set(vertex,[])
    }
    addEdge(vertex,edge) {
      this.adjList.get(vertex).push(edge)
      this.adjList.get(edge).push(vertex)
    }
    printGraph() {
      for (const [key,value] of this.adjList) {
        console.log(key,'->',value.join(" "))
      }
    }
   isCycle(currentNode,parent,visited={}) {
    debugger
    console.log('currentNode',currentNode)
    debugger
    console.log('parent',parent)
     visited[currentNode] = true
     for (const adjacent of this.adjList.get(currentNode)) {
      debugger
      console.log('adjacent',adjacent)
        if(!visited[adjacent]) {
          if(this.isCycle(adjacent,currentNode,visited)) {
            return true
          }
        } else if(adjacent !== parent) {
          return true
        }
     }
     return false
   }
  
  
  }
  
  const graph = new Graph(6)
  
  graph.addVertex(1)
  graph.addVertex(2)
  graph.addVertex(3)
  graph.addVertex(4)
  graph.addVertex(5)
  graph.addVertex(6)
  graph.addVertex(7)
  
  graph.addEdge(1,2)
  graph.addEdge(3,4)
  graph.addEdge(1,3)
  graph.addEdge(2,5)
  graph.addEdge(3,6)
  graph.addEdge(5,7)
  graph.addEdge(6,7)
  
  // graph.printGraph()
  
  console.log(graph.isCycle(1,-1))