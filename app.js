const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).json({
		success: true
	});
});

const api = require('./backend/routes');
app.use('/api', api);

module.exports = app;