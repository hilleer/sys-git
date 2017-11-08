let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
	res.json({url: '/ping', status: 200});
});

module.exports = router;