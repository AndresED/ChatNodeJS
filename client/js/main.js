var host_server="192.168.1.35:6677";
var socket = io.connect(host_server,{'forceNew':true});
socket.on("messages",function(data){
	console.log(data);
	render(data);
});

function render(data){
	var messages="";
	var html = data.map(function(message,index){
		console.log(message);
		messages=messages+`
				<div class="message">
					<strong>${message.nickname}</strong> dice:
					<p>${message.text}</p>
				</div>
			`;
	});
	console.log("mensajes: "+messages);
	document.getElementById('messages').innerHTML=messages;
}