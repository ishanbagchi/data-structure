class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	push(value) {
		var newNode = new Node(value)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			newNode.prev = this.last
			this.last = newNode
		}
		return ++this.size
	}

	pop() {
		if (this.size === 0) return undefined
		var poppedNode = this.last
		if (this.size === 1) {
			this.first = null
			this.last = null
		} else {
			this.last = this.last.prev
			this.last.next = null
			poppedNode.prev = null
		}
		this.size--
		return poppedNode.value
	}

	print() {
		if (this.size === 0) return undefined
		var arr = []
		var current = this.first
		while (current) {
			arr.push(current.value)
			current = current.next
		}
		return arr
	}
}

var stack = new Stack()

console.log(stack.push('Tony'))
console.log(stack.push('Steve'))
console.log(stack.push('Thor'))

console.log(stack.print())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.print())

console.log(stack.pop())
console.log(stack.push('Steve'))
console.log(stack.push('Thor'))
