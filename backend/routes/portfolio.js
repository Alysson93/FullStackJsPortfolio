const router = require('express').Router();

const Portfolio = require('../models/Portfolio');

// Create
router.post('/', (req, res) => {
	const portfolio = new Portfolio({
		title: req.body.title,
		description: req.body.description
	});
	portfolio.save().then((data) => {
		res.status(201).json({
			success: true,
			data
		});
	}).catch((err) => {
		res.json({
			success: false,
			err
		});
	});
});

// Read
router.get('/', async (req, res) => {
	try {
		const portfolio = await Portfolio.find();
		res.json({
			success: true,
			portfolio
		});		
	} catch(err) {
		res.json({
			success: false,
			err
		});
	}
});

router.get('/:slug', async (req, res) => {
	try {
		const portfolio = await Portfolio.findOne({
			slug: req.params.slug
		});
		res.json({
			success: true,
			portfolio
		});
	} catch(err) {
		res.json({
			success: false,
			err
		});
	}
});

// Update
router.patch('/:slug', async (req, res) => {
	try {
		const portfolio = await Portfolio.updateOne({
			slug: req.params.slug
		},{
			title: req.body.title,
			description: req.body.description
		});
		res.json({
			success: true,
			portfolio: portfolio.modifiedCount
		});
	} catch(err) {
		res.json({
			success: false,
			err
		});
	}
});


// Delete
router.delete('/:slug', async (req, res) => {
	try {
		const portfolio = await Portfolio.deleteOne({
			slug: req.params.slug
		});
		res.json({
			success: true,
			portfolio: portfolio.deletedCount
		})
	} catch(err) {
		res.json({
			success: false,
			err
		});
	}
});

module.exports = router;