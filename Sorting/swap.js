// ES5
function swap1(arr, idx1, idx2) {
	let temp = arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = temp
	return arr
}

// ES2015
const swap2 = (arr, idx1, idx2) => {
	;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
	return arr
}

const array = [1, 2, 3, 4]

console.log(array)
console.log(swap1(array, 0, 1))
console.log(swap2(array, 2, 3))
console.log(array)
