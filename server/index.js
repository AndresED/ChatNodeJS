 var express= require('express');
 var app= express();
 var server= require('http').Server(app);
 var io = require('socket.io')(server);
 var port=6677;
 app.get('/',function(req,res){
 	res.status(200).send('Hola mundo desde una ruta');
 });
 server.listen(port,function(){
 	console.log("Servidor esta  funcionando en  http://localhost:"+port);
 });
