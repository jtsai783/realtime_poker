var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('underscore');

var suit = ['S', 'H', 'D', 'C'];
var cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q',
	'K'
];

var Game = function(){
	this.players = [];
};

var Players  = function(id){
	this.ready = false;
	this.id = id;
};

var game;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/join', function(req, res){
	res.sendFile(__dirname + '/join.html');
});

http.listen(3000, function(){
	console.log('listening on 3000');
});

io.on('connection', function(socket){

	console.log("hello, is it me you're looking for ");
	// game = game || new Game();
	// game.players.push(new Players(socket.id));
	// console.log('a user connected');
	// console.log(game);

	// socket.on('player ready', function(id){
	// 	console.log('clicked ready');
	// 	var player = _.find(game.players, function(player){
	// 		return player.id === id;
	// 	});

	// 	player.ready = true;
	// 	console.log("" + player.id + " is ready");
	// });
});

