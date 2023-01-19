require('../db/connection');

const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Please, do not call /api.'
	});
});

const portfolio = require('./portfolio');
router.use('/portfolio', portfolio);

module.exports = router;
