function hash1(key, arrayLen = 10) {
	let total = 0
	for (let char of key) {
		let value = char.charCodeAt(0) - 96
		total = (total + value) % arrayLen
	}
	return total
}

function hash(key, arrayLen = 10) {
	let total = 0
	let WEIRD_PRIME = 31
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i]
		let value = char.charCodeAt(0) - 96
		total = (total * WEIRD_PRIME + value) % arrayLen
	}
	return total
}

console.log('pink', hash('pink', 10)) // 0
console.log('red', hash('red', 10)) // 7
console.log('salmon', hash('salmon', 10)) // 4
console.log('turquoise', hash('turquoise', 10)) // 5
