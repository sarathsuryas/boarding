class Graph {
    constructor(vertices) {
    this.noOfVertices = vertices;
    this.AdjList = new Map()
    } 
    addVertex(v) {
        this.AdjList.set(v,[])
    } 
    addEdge(v,w) {
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }
    // Prints the vertex and adjacency list
printGraph()
{
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) 
{
        // get the corresponding adjacency list
        // for the vertex
        var get_values = this.AdjList.get(i);
       

        // print the vertex and its adjacency list
        console.log(i + " -> " ,get_values);
    }
}
BFS(startingNode) {
const visited = {}    
const q = []
q.push(startingNode)
visited[startingNode] = true
while(q.length > 0) {
  const element = q.shift()
  const adjacencyList = this.AdjList.get(element)
  for (const element of adjacencyList) {
     if(!visited[element]) {
         q.push(element)
         visited[element] = true
     } 
  }
}

}
dfs(startingNode) {
  const visited = {}
  this.DFSUtil(startingNode,visited)
}
DFSUtil(vertex,visited) {
 visited[vertex] = true
 console.log(vertex)
 const connections = this.AdjList.get(vertex)
 for (let i = 0; i < connections.length; i++) {
    const element = connections[i];
       if(!visited[element]) {
          this.DFSUtil(element,visited)
       }
 }
}

}


const graph = new Graph(5)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)



graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 6);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(5, 7);
graph.addEdge(6, 7);
// graph.printGraph()
graph.dfs(1)