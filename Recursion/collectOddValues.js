// HELPER METHOD - CLOSURES
function collectOddValues1(arr) {
	let result = []
	function helper(helperInput) {
		if (helperInput.length === 0) {
			return
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0])
		}

		helper(helperInput.slice(1))
	}

	helper(arr)

	return result
}

// PURE RECURSION
function collectOddValues2(arr) {
	let newArray = []

	if (arr.length === 0) {
		return newArray
	}

	if (arr[0] % 2 !== 0) {
		newArray.push(arr[0])
	}

	newArray = newArray.concat(collectOddValues2(arr.slice(1)))
	return newArray
}

console.log(collectOddValues1([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(collectOddValues2([11, 12, 13, 14, 15, 16, 17, 18, 19]))
