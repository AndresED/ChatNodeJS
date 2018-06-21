var host_server="192.168.1.35:6677";
var socket = io.connect(host_server,{'forceNew':true});
socket.on("messages",function(data){
	render(data);
});

function render(data){
	var messages="";
	console.log(data);
	var html = data.map(function(message,index){
		messages=messages+`
				<div class="message">
					<strong>${message.nickname}</strong> dice:
					<p>${message.text}</p>
				</div>
			`;
	});
	console.log("mensajes: "+messages);
	var div_msgs=document.getElementById('messages');
	div_msgs.innerHTML=messages;
	div_msgs.scrollTop=div_msgs.scrollHeight;
}
function addMessage(e){
	var message = {
		nickname: document.getElementById('nickname').value,
		text: document.getElementById('text').value
	};
	document.getElementById('nickname').style.display='none';
	socket.emit('add-message',message);
	return false;
}