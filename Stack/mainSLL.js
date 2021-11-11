class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	push(val) {
		var newNode = new Node(val)
		if (!this.size) {
			this.first = newNode
			this.last = newNode
		} else {
			var temp = this.first
			this.first = newNode
			this.first.next = temp
		}
		return ++this.size
	}

	pop() {
		if (!this.first) return null
		var temp = this.first
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.size--
		return temp.value
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
