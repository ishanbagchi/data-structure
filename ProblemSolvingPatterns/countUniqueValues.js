// VERSION 1

function countUniqueValues1(arr) {
	if (arr.length === 0) {
		return 0
	} else if (arr.length === 1) {
		return 1
	}

	let ptr1 = 0
	let ptr2 = 1
	let count = 1

	while (ptr2 < arr.length) {
		if (arr[ptr1] !== arr[ptr2]) {
			count++
			ptr1 = ptr2
		}
		ptr2++
	}
	return count
}

// VERsION 2 - FINAL
function countUniqueValues(arr) {
	if (arr.length === 0) {
		return 0
	}

	let ptr1 = 0
	let ptr2 = 1

	while (ptr2 < arr.length) {
		if (arr[ptr1] !== arr[ptr2]) {
			ptr1++
			arr[ptr1] = arr[ptr2]
		}
		ptr2++
	}
	return ptr1 + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
