class Graph {
    constructor() {
        this.adjList = new Map()
    }
    addEdge(v1,v2) {
        if(!this.adjList.has(v1)) {
            this.adjList.set(v1,[])
        }
        if(!this.adjList.has(v2)) {
            this.adjList.set(v2,[])
        }
        this.adjList.get(v1).push(v2)
        this.adjList.get(v2).push(v1)
    }
    
}


const graph = new Graph()

graph.addEdge(1, 2)
graph.addEdge(2, 3)
graph.addEdge(4, 5)
graph.addEdge(5, 6)
graph.addEdge(6, 4)
function hasCycle(curr,parent,visited) {
    visited[curr] = true
     for (const adjacent of graph.adjList.get(curr)) {
         if(!visited[adjacent]) {
            if(hasCycle(adjacent,curr,visited)) return true
         } else if(parent!==adjacent) {
              return true
        }
     }
     return false
}

function detectCycle() {
    const visited = {}
    for (const key of graph.adjList.keys()) {
        if(!visited[key]) {
            if(hasCycle(key,-1,visited)) {
                return true
            }
        }
    }
    return false
}


console.log(detectCycle())
