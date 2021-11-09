class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
		this.tardies = 0
		this.scores = []
	}

	fullName() {
		return `Your fullName is ${this.firstName} ${this.lastName}`
	}

	markLate() {
		this.tardies += 1
		if (this.tardies >= 3) {
			return `${this.firstName} ${this.lastName} IS EXPELLED!!`
		}
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
	}

	addScore(score) {
		this.scores.push(score)
		return this.scores
	}

	calculateAverage() {
		let sum = this.scores.reduce(function (a, b) {
			return a + b
		})
		return sum / this.scores.length
	}
}

let firstStudent = new Student('Ishan', 'Bagchi')
let secondStudent = new Student('Colt', 'Steele')

console.log(firstStudent.fullName()) // Your fullName is Ishan Bagchi
console.log(secondStudent.fullName()) // Your fullName is Colt Steele
console.log(firstStudent.markLate()) // Ishan Bagchi has been late 1 times.
console.log(firstStudent.markLate()) // Ishan Bagchi has been late 2 times.
console.log(firstStudent.tardies) // 2
console.log(firstStudent.markLate()) // Ishan Bagchi IS EXPELLED!!
console.log(firstStudent.tardies) // 3
console.log(secondStudent.tardies) // 0
console.log(secondStudent.addScore(25)) // [25]
console.log(secondStudent.addScore(30)) // [25, 30]
console.log(secondStudent.addScore(35)) // [25, 30, 35]
console.log(secondStudent.addScore(40)) // [25, 30, 35, 40]
console.log(secondStudent.calculateAverage()) // 32.5
