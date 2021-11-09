class Student {
	constructor(firstName, lastName, year) {
		this.firstName = firstName
		this.lastName = lastName
		this.year = year
	}
}

let firstStudent = new Student('Ishan', 'Bagchi', 2000)
let secondStudent = new Student('Colt', 'Steele')

console.log(secondStudent.year)
secondStudent.year = 1990
console.log(secondStudent.year)
