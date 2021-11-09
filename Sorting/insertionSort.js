function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i]
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = currentVal
	}
	return arr
}

console.log(insertionSort([2, 6, 3, 7, 38, 24, 74, 53]))
