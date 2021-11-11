class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	enqueue(value) {
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

	dequeue() {
		if (!this.first) return null
		var temp = this.first
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		if (this.size !== 1) {
			this.first.prev = null
		}
		this.size--
		return temp.value
	}

	print() {
		if (!this.first) return undefined
		let current = this.first
		let arr = []
		while (current) {
			arr.push(current.value)
			current = current.next
		}
		return arr
	}
}

const q = new Queue()

console.log(q.enqueue('Tony'))
console.log(q.enqueue('Steve'))
console.log(q.enqueue('Thor'))

console.log(q.print())

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())

console.log(q.print())

console.log(q.dequeue())
console.log(q.enqueue('Steve'))
console.log(q.enqueue('Thor'))
