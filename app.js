const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require('./backend/routes');
app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('frontend/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

module.exports = app;