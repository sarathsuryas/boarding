class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addEdges(v1, v2) {
        if (!this.adjList.has(v1)) this.adjList.set(v1, []);
        if (!this.adjList.has(v2)) this.adjList.set(v2, []);
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }
    cloneGraphBfs(startNode) {
       const visited = {}
       const adjListClone = new Map()
       const q = [startNode]
       adjListClone.set(startNode,[])
       while (q.length > 0) {
          let current = q.shift()
          if(!visited[current]) {
            visited[current] = true
            for (const element of this.adjList.get(current)) {
                if(!adjListClone.has(element)) {
                    adjListClone.set(element,[])
                }
                adjListClone.get(current).push(element)
                if(!visited[element]) {
                    q.push(element)
                }
            }
          }  
       }
       const graph2 = new Graph()
       graph2.adjList = adjListClone
       return graph2
    }

}

// Example Usage
const graph = new Graph();
graph.addEdges(1, 2);
graph.addEdges(1, 3);
graph.addEdges(3, 2);
graph.addEdges(3, 4);
console.log(graph.cloneGraphBfs(1).adjList)