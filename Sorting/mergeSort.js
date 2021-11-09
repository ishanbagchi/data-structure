function mergeSort(arr) {
	if (arr.length <= 1) return arr
	let mid = Math.floor(arr.length / 2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	return merge(left, right)
}

function merge(arr1, arr2) {
	let results = []
	let i = 0
	let j = 0
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i])
			i++
		} else {
			results.push(arr2[j])
			j++
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i])
		i++
	}
	while (j < arr2.length) {
		results.push(arr2[j])
		j++
	}

	return results
}

console.log(mergeSort([2, 6, 3, 7, 38, 24, 74, 53]))
// merge([1,10,50], [2,14,99,100])

var data = Array.apply(null, { length: 10_000 }).map(Function.call, Math.random)
console.log(mergeSort(data))
