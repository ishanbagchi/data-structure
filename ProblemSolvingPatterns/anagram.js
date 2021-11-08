// SOLUION 1

function validAnagram1(str1, str2) {
	if (str1.length !== str2.length) {
		return false
	}
	let counter1 = {}
	let counter2 = {}
	for (let key of str1) {
		counter1[key] = ++counter1[key] || 1
	}
	for (let key of str2) {
		counter2[key] = ++counter2[key] || 1
	}
	for (let key in counter1) {
		if (!(key in counter2)) {
			return false
		}
		if (counter1[key] !== counter2[key]) {
			return false
		}
	}
	return true
}

// SOLUTION 2

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false
	}

	const lookup = {}

	for (let char of first) {
		lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1)
	}

	for (let key of second) {
		if (!lookup[key]) {
			return false
		} else {
			lookup[key]--
		}
	}

	return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false)
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
