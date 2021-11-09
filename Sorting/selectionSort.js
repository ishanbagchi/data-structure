// VERSION 1
function selectionSort1(arr) {
	let min
	for (let i = 0; i < arr.length; i++) {
		min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				swap(arr, j, min)
				min = j
			}
		}
	}
	return arr
}

// VERSION 2 - FINAL
function selectionSort(arr) {
	let lowest
	for (let i = 0; i < arr.length; i++) {
		lowest = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) lowest = j
		}
		if (i !== lowest) swap(arr, i, lowest)
	}
	return arr
}

// UTILS
const swap = (arr, idx1, idx2) => {
	;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

console.log(selectionSort1([2, 6, 3, 7, 38, 24, 74, 53]))
