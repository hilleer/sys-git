function listAddition (list) {
	let sum = 0;
	list.forEach((item) => {
		sum += item;
	});
	return sum;
}

module.exports = {
	listAddition
}