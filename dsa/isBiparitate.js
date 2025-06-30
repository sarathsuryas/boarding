class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addEdge(v1, v2) {
        if (!this.adjList.has(v1)) {
            this.adjList.set(v1, []);
        }
        if (!this.adjList.has(v2)) {
            this.adjList.set(v2, []);
        }
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }
    isBipartite() {
        const colors = new Map()
        for (const node of this.adjList.keys()) {
            if(!colors.has(node)) {
                if (!this.bfsCheck(node, colors)) {
                    return false    
                }
            }
        }
        return true
    }
    bfsCheck(start, colors) {
        colors.set(start, 0)
        const q = [start]
        while (q.length > 0) {
            const node = q.shift()
            for (const adjacent of this.adjList.get(node)) {
                if(!colors.has(adjacent)) {
                    colors.set(adjacent,1 - colors.get(node))
                    q.push(adjacent)
                } else if(colors.get(adjacent) === colors.get(node)) {
                    return false
                }
            }
        }
        return true
    }
}

// Example usage
const graph = new Graph();
// non bipartiate
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(2, 6);
// graph.addEdge(3, 4);
// graph.addEdge(4, 5);
// graph.addEdge(5, 6);

// bipartiate 
graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(2,6)
graph.addEdge(3,4)
graph.addEdge(4,5)
graph.addEdge(5,8)
graph.addEdge(5,7)
graph.addEdge(7,6)



console.log(graph.isBipartite()); // Output: false
