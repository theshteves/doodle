document.querySelector('#chat-input').focus();
document.querySelector('#chat-input').onkeyup = function(e) {
    if (e.keyCode === 13) {  // enter, return
        document.querySelector('#room-name-submit').click();
    }
};

document.querySelector('#chat-submit').onclick = function(e) {
    var roomName = document.querySelector('#chat-input').value;
    window.location.pathname = '/chat/' + roomName + '/';
};
