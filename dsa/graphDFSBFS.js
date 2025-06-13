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
    bfs(startingNode) {
      const visited = {}
      const q = []
      visited[startingNode] = true
      q.push(startingNode)
      while (q.length > 0) {
        let vertex = q.shift()
        console.log(vertex)
        let list = this.adjList.get(vertex)
        for (const element of list) {
           if(!visited[element]) {
            visited[element]  = true
            q.push(element)
           }
        }
      }
    }
  dfs(vertex,visited={}) {
     visited[vertex] = true
     console.log(vertex)
     const neighbours = this.adjList.get(vertex)
     for (const element of neighbours) {
      if(!visited[element]) this.dfs(element,visited) 
     }
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
  graph.addEdge(1,3)
  graph.addEdge(2,5)
  graph.addEdge(3,4)
  graph.addEdge(3,6)
  graph.addEdge(5,7)
  graph.addEdge(6,7)

  graph.bfs(1)