function slowHash(key) {
	for (var i = 0; i < 10_1000; i++) {
		console.log("everyday i'm hashing")
	}
	return key[0].charCodeAt(0)
}

function sameHashedValue(key) {
	return 0
}

function randomHash(key) {
	return Math.floor(Math.random() * 1000)
}
