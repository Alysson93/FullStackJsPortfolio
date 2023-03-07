const mongoose = require('mongoose');
const slug = require('slug');

const { Schema } = mongoose;

const portfolio = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	slug: {
		type: String,
		required: true,
		unique: true,
		default: function() { return slug(this.title) }
	},
	description: {
		type: String,
		required: true
	},
	text: {
		type: String
	},
	image: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('portfolio', portfolio);
