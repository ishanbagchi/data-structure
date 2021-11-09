const strings = ['Steele', 'Colt', 'Ishan', 'Data Structure', 'Bagchi', 'Rohan']
const nums = [6, 4, 15, 10]

console.log(strings.sort())
console.log(nums.sort())

function numberCompare(num1, num2) {
	return num1 - num2
}

function compareByLength(str1, str2) {
	return str1.length - str2.length
}

console.log(strings.sort(compareByLength))
console.log(nums.sort(numberCompare))
