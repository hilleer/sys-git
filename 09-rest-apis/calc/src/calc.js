let router = require('express').Router();

let addition = require('../helpers/addition.js');
let subtraction = require('../helpers/subtraction.js');

router.get('/', (req, res) => {
	res.json({status: 200, url: '/calc'})
});

router.get('/addition/:array', (req, res) => {
	let numberArray = JSON.parse(req.params.array);

	let sum = addition.listAddition(numberArray);
	let numbers = numberArray.join('+');

	res.json({result: `${numbers}=${sum}`});
});

router.get('/subtract/:a/:b', (req, res) => {
	let a = JSON.parse(req.params.a);
	let b = JSON.parse(req.params.b);

	let subtracted = subtraction.subtract(a, b);

	res.json({result: `${a}-${b}=${subtracted}`})
});

module.exports = router;