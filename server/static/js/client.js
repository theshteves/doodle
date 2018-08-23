$.get('http://127.0.0.1/api/players/1', function (data) {
    console.log(data);
});

var chatSocket = new WebSocket(
    'ws://' + window.location.host +
    '/ws/chat/' + roomName + '/');

chatSocket.onmessage = function(e) {
    var data = JSON.parse(e.data);
    var message = data['message'];
    document.querySelector('#chat-log').value += (message + '\n');
};

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector('#chat-input').focus();
document.querySelector('#chat-input').onkeyup = function(e) {
    if (e.keyCode === 13) {  // enter, return
        document.querySelector('#chat-submit').click();
    }
};

document.querySelector('#chat-submit').onclick = function(e) {
    var messageInputDom = document.querySelector('#chat-input');
    var message = messageInputDom.value;
    chatSocket.send(JSON.stringify({
        'message': message
    }));

    messageInputDom.value = '';
};
