class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		let newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return this
		}
		let current = this.root
		while (true) {
			if (value === current.value) return undefined
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

	DFSPreOrder() {
		var data = []
		var current = this.root
		function traverse(node) {
			data.push(node.value)
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}
		traverse(current)
		return data
	}

	DFSPostOrder() {
		var data = []
		var current = this.root
		function traverse(node) {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
			data.push(node.value)
		}
		traverse(current)
		return data
	}

	DFSInOrder() {
		var data = []
		var current = this.root
		function traverse(node) {
			node.left && traverse(node.left) // <-- if (node.left) traverse(node.left)
			data.push(node.value)
			node.right && traverse(node.right) // <-- if (node.right) traverse(node.right)
		}
		traverse(current)
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

console.log('PreOrder', tree.DFSPreOrder()) // [10, 6, 3, 8, 15, 20]
console.log('PostOrder', tree.DFSPostOrder()) // [3, 8, 6, 20, 15, 10]
console.log('InOrder', tree.DFSInOrder()) // [3, 6, 8, 10, 15, 20]
