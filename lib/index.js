var $ = require('./jquery');
var chatBox = require('./chatbox');
var createMessage = require('./messages');
var textInput = $('#input');
var sendButton = $('#send');
var chatList = $('#message-list');

sendButton.on('click', function(){
  var userMessage = createMessage('me', textInput.val());
  var botMessage = createMessage('EchoBot', textInput.val());
  chatBox.addMessage(userMessage, chatList);
  window.setTimeout(chatBox.addMessage, 3000, botMessage, chatList);
  chatBox.clearInput(textInput);
  chatBox.buttonEnabler(textInput, sendButton);
});

textInput.on('keyup', function(){
  chatBox.buttonEnabler(textInput, sendButton);
  chatBox.updateCount();
});
