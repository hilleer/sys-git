let router = require('express').Router();

router.get('/', (req, res) => {
	res.json({status: 200, response: 'success'});
});

module.exports = router;