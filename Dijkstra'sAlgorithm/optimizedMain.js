class WeightedGraph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight })
		this.adjacencyList[vertex2].push({ node: vertex1, weight })
	}

	Dijkstra(start, finish) {
		const nodes = new PriorityQueue()
		const distances = {}
		const previous = {}
		let path = []
		let smallest

		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0
				nodes.enqueue(vertex, 0)
			} else {
				distances[vertex] = Infinity
				nodes.enqueue(vertex, Infinity)
			}
			previous[vertex] = null
		}

		while (nodes.values.length) {
			smallest = nodes.dequeue().val
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest)
					smallest = previous[smallest]
				}
				break
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbour in this.adjacencyList[smallest]) {
					let nextNode = this.adjacencyList[smallest][neighbour]
					let candidate = distances[smallest] + nextNode.weight
					let nextNeighbour = nextNode.node

					if (candidate < distances[nextNeighbour]) {
						distances[nextNeighbour] = candidate
						previous[nextNeighbour] = smallest
						nodes.enqueue(nextNeighbour, candidate)
					}
				}
			}
		}
		return {
			distance: distances[finish],
			path: path.concat(smallest).reverse(),
		}
	}
}

class PriorityQueue {
	constructor() {
		this.values = []
	}

	enqueue(val, priority) {
		let newNode = new Node(val, priority)
		this.values.push(newNode)
		return this._bubbleUp()
	}

	dequeue() {
		const min = this.values[0]
		const end = this.values.pop()
		if (this.values.length > 0) {
			this.values[0] = end
			this._sinkDown()
		}
		return min
	}

	_bubbleUp() {
		let idx = this.values.length - 1
		const element = this.values[idx]
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2)
			let parent = this.values[parentIdx]
			if (element.priority >= parent.priority) break
			this.values[parentIdx] = element
			this.values[idx] = parent
			idx = parentIdx
		}
		return idx
	}

	_sinkDown() {
		let idx = 0
		const length = this.values.length
		const element = this.values[0]
		while (true) {
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2
			let leftChild, rightChild
			let swap = null

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx]
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx]
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx
				}
			}

			if (swap === null) break
			this.values[idx] = this.values[swap]
			this.values[swap] = element
			idx = swap
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val
		this.priority = priority
	}
}

const graph = new WeightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(graph.Dijkstra('A', 'E'))
