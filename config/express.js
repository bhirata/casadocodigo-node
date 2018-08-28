const express = require('express');
const load = require('express-load');

const bodyParser = require('body-parser');

const expressValidator = require('express-validator');

module.exports = function () {
	
	const app = express();

	// Set view engine to ejs
	// Say to express use ejs as view engine
	app.set('view engine', 'ejs');
	// Set views location
	app.set('views','./app/views');
	app.use(express.static('./app/public'));

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use(expressValidator());

	load('routes', { cwd: 'app' })
		.then('repository')
		.then('factory')
		.into(app);

	return app;
};