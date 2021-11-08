// VERSION - ISHAN
function binarySearch1(arr, num) {
	let left = 0
	let right = arr.length - 1
	while (left <= right) {
		let centre = Math.floor((left + right) / 2)

		if (arr[centre] === num) return centre
		else if (num > arr[centre]) left = centre + 1
		else right = centre - 1
	}
	return -1
}

// VERSION - COLT STEELE
function binarySearch(arr, num) {
	let start = 0
	let end = arr.length - 1
	let middle = Math.floor((start + end) / 2)

	while (arr[middle] !== num && start <= end) {
		if (num > arr[middle]) start = middle + 1
		else end = middle - 1

		middle = Math.floor((start + end) / 2)
	}
	return arr[middle] === num ? middle : -1
}

console.log(binarySearch([10, 15, 20, 25, 30], 15)) // 1
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4)) // 4
console.log(binarySearch([100], 100)) // 0
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)) // -1
console.log(binarySearch([100], 200)) // -1
