var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/webclient/index.html');
});

io.on('connection', function(socket){
  console.log('A user connected via Socket.IO');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

