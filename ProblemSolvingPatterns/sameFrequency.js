function sameFrequency(num1, num2) {
	const str1 = num1.toString()
	const str2 = num2.toString()

	if (str1.length !== str2.length) {
		return false
	}

	counter = {}

	for (let key of str1) {
		counter[key] = ++counter[key] || 1
	}

	for (let key of str2) {
		if (!counter[key]) {
			return false
		} else {
			counter[key]--
		}
	}

	return true
}

console.log(sameFrequency(321, 123)) // true
