// Express Configurations
const app = require('./config/express')();

// Application port
const appPort = 3000;


app.listen(appPort, function () {
	console.log("Server listening in ", appPort);
})