/*
 Question	

    Using the JavaScript language, have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.

    An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.

    Hard challenges are worth 15 points and you are not timed for them.

    Sample Test Cases
    
    Input:"5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"
    Output:"A-C-D-F"
    
    Input:"4","X","Y","Z","W","X-Y","Y-Z","X-W"
    Output:"X-W"
*/

//Answer

function ShortestPath(strArr) { 
    class Graph {
        constructor() {
            this.neighbours = [];
        }
        addPath(u, v) {
            if (this.neighbours[u] === undefined) this.neighbours[u] = [];
            this.neighbours[u].push(v);
            if (this.neighbours[v] === undefined) this.neighbours[v] = [];
            this.neighbours[v].push(u);
        }
    }

    function getShortestPath(graph, startNode, targetNode) {
        const queue = [ startNode ];
        const visited = { startNode: true };
        let tail = 0;
        const predecessor =  {};
        while (tail < queue.length) {
            let currentNode = queue[tail];
            tail ++;
            const neighbours = graph.neighbours[currentNode];
            for (let i = 0; i < neighbours.length; i++) {
                const neighbourNode = neighbours[i];
                if (!visited[neighbourNode]) {
                    visited[neighbourNode] = true;
                    if (neighbourNode === targetNode) {
                        const path = [ targetNode ];
                        while (currentNode !== startNode) {
                            path.push(currentNode);
                            currentNode = predecessor[currentNode];
                        } 
                        path.push(currentNode);
                        path.reverse();
                        return path.join("-");
                    }
                    predecessor[neighbourNode] = currentNode;
                    queue.push(neighbourNode);    
                }
            }
        }
        return "-1";
    }

    const graph = new Graph();
    const NUMBER_OF_NODES = parseInt(strArr[0]);
    const STARTNODE = strArr[1];
    const TARGETNODE = strArr[NUMBER_OF_NODES];
    let numberOfPaths = 0;
    for (let i = NUMBER_OF_NODES + 1; i < strArr.length; i ++) {
        let node = strArr[i].split("-");
        graph.addPath(node[0], node[1]);
        numberOfPaths ++;
    }
    
    if (numberOfPaths <= 0) return -1;

    return getShortestPath(graph, STARTNODE, TARGETNODE);
}

//Control

const input = ["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"];

console.log(ShortestPath(input));