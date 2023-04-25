class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertice(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    check(){
        return this
    }
}

const myGraph = new Graph();


// Vértices
myGraph.addVertice(1);
myGraph.addVertice(3);
myGraph.addVertice(4);
myGraph.addVertice(5);
myGraph.addVertice(6);
myGraph.addVertice(8);

// Conexiones
myGraph.addEdge(8,4)
myGraph.addEdge(4,1)
myGraph.addEdge(1,3)
myGraph.addEdge(1,6)
myGraph.addEdge(3,6)
myGraph.addEdge(3,5)
myGraph.addEdge(5,4)

console.log(myGraph.check());