class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	fullName() {
		return `Your fullName is ${this.firstName} ${this.lastName}`
	}

	static enrollStudents(...students) {
		// do something
	}
}

let firstStudent = new Student('Ishan', 'Bagchi')
let secondStudent = new Student('Colt', 'Steele')

Student.enrollStudents([firstStudent, secondStudent])
