const mongoose = require('mongoose');

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
	console.log('Conectado ao MongoDB');
});
