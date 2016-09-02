var io = require('socket.io');
var Account = require('./models/account');

module.exports.listen = function(app) {
	io = io.listen(app);

	var userList = [];
	var username;

	io.on('connection', function(socket) {
		// console.log('a user connected');

		socket.on('user_joined', function(msg) {
			server_time = new Date();
			msg.time = server_time.getTime();

			username = msg.username;
			userList.push(username);

			msg.userList = userList;
						
			io.emit('user_joined', msg);
		});

		socket.on('disconnect', function () {
			var msg = {
				username: username
			}

			userList.splice(userList.indexOf(username), 1);

			msg.userList = userList;

			server_time = new Date();
			msg.time = server_time.getTime();
						
			io.emit('user_left', msg);
		});


	});

	return io
}