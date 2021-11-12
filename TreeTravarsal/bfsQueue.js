class Node {
	constructor(value) {
		this.value = value
	}
}

class NodeTree extends Node {
	constructor(value) {
		super(value)
		this.left = null
		this.right = null
	}
}

class NodeQ extends Node {
	constructor(value) {
		super(value)
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	enqueue(value) {
		let newNode = new NodeQ(value)
		if (this.size === 0) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		return ++this.size
	}

	dequeue() {
		if (!this.first) return null
		let temp = this.first
		if (this.size === 1) {
			this.last = null
		}
		this.first = this.first.next
		this.size--
		return temp
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		let newNode = new NodeTree(value)
		if (!this.root) {
			this.root = newNode
			return this
		}
		let current = this.root
		while (true) {
			if (current.value === value) return undefined
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode
					return this
				}
				current = current.left
			} else {
				if (!current.right) {
					current.right = newNode
					return this
				}
				current = current.right
			}
		}
	}

	BFS() {
		var node = this.root
		var data = []
		var queue = new Queue()

		queue.enqueue(node)
		while (queue.size !== 0) {
			node = queue.dequeue().value
			data.push(node.value)
			if (node.left) queue.enqueue(node.left)
			if (node.right) queue.enqueue(node.right)
		}
		return data
	}
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.BFS())
