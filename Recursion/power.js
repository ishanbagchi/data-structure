function power(num, exp) {
	if (exp === 0) return 1
	else if (exp === 1) return num
	return num * power(num, exp - 1)
}

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16
