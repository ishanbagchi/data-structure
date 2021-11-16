// NAIVE
function fibonacci1(num) {
	if (num <= 2) return 1
	return fibonacci(num - 1) + fibonacci(num - 2)
}

// MEMOIZED - 1
function fibonacci2(n, memo = []) {
	if (memo[n] !== undefined) return memo[n]
	if (n <= 2) return 1
	let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
	memo[n] = res
	return res
}

// MEMOIZED - 2
function fibonacci3(n, memo = [undefined, 1, 1]) {
	if (memo[n] !== undefined) return memo[n]
	let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
	memo[n] = res
	return res
}

// TBULATION
function fibonacci(n) {
	if (n <= 2) return 1
	let fibNums = [0, 1, 1]
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
	}
	return fibNums[n]
}

console.log('Normal Recursion [10]', fibonacci1(10))
console.log('Memoized Recursion [500]', fibonacci3(500))
console.log('Tabulation - Bottom to Up [500]', fibonacci(500))
