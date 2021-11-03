// VERSION 1

function charCount1(str) {
	let obj = {}
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase()
		if (/[a-z0-9]/.test(char)) {
			if (obj[char] > 0) {
				obj[char]++
			} else {
				obj[char] = 1
			}
		}
	}
	return obj
}

// VERSION 2

function charCount2(str) {
	let obj = {}
	for (let char of str) {
		char = char.toLowerCase()
		if (/[a-z0-9]/.test(char)) {
			if (obj[char] > 0) {
				obj[char]++
			} else {
				obj[char] = 1
			}
		}
	}
	return obj
}

// VERSION 3

function charCount3(str) {
	let obj = {}
	for (let char of str) {
		char = char.toLowerCase()
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1
		}
	}
	return obj
}

// VERSION 4 - FINAL

function charCount(str) {
	let obj = {}
	for (let char of str) {
		char = char.toLowerCase()
		if (isAlphaNumeric(char)) {
			obj[char] = ++obj[char] || 1
		}
	}
	return obj
}

function isAlphaNumeric(char) {
	let code = char.charCodeAt(0)
	if (
		!(code > 47 && code < 58) &&
		!(code > 64 && code < 91) &&
		!(code > 96 && code < 123)
	) {
		return false
	}
	return true
}

// RUN

console.log(charCount('Ishan Bagchi'))
