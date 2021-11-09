// VERSION 1
function bubbleSort1(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}

// VERSION 2 - FINAL
function bubbleSort(arr) {
	let noSwaps
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
				noSwaps = false
			}
		}
		if (noSwaps) break
	}
	return arr
}

// UTILS
function swap(arr, idx1, idx2) {
	let temp = arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = temp
}

console.log(bubbleSort([2, 6, 3, 7, 38, 24, 74, 53]))
