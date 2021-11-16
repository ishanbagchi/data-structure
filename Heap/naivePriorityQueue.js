class PriorityQueue {
	constructor() {
		this.values = []
	}

	enqueue(val, priority) {
		this.values.push({ val, priority })
		this.sort()
	}

	dequeue() {
		return this.values.shift()
	}

	sort() {
		this.values.sort((a, b) => a.priority - b.priority)
	}
}

let ER = new PriorityQueue()

ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)

console.log(ER.values)
