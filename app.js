// Express Configurations
const app = require('./config/express')();

const http = require('http').Server(app);
const io = require('socket.io')(http);


// Application port
const appPort = 3000;

app.set('io',io);

const server = http.listen(appPort, function () {
	console.log("Server listening in ", appPort);
});