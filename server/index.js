 var express= require('express');
 var app= express();
 var server= require('http').Server(app);
 var io = require('socket.io')(server);
 var port=6677;

app.use(express.static('client'));


 app.get('/',function(req,res){
 	res.status(200).send('Hola mundo desde una ruta');
 });


var messages=[
	{
		id:0,
		text:"Bienvenido al chat",
		nickname:'Comodito'
	},
	{
		id:1,
		text:"En que podemos ayudarlo",
		nickname:'Comodito'
	}
];


io.on('connection',function(socket){
	console.log("El nodo con IP: "+socket.handshake.address+" se ha conectado");
	socket.emit('messages',messages);
	socket.on('add-message',function(data){
		messages.push(data);
		var length=messages.length;
		messages[length-1].id=length-1
		socket.emit('messages',messages);
	});
});




 server.listen(port,function(){
 	console.log("Servidor esta  funcionando en  http://localhost:"+port);
 });
