var $ = require('./jquery');
var chatBox = require('./chatbox');
var createMessage = require('./messages');
var textInput = $('#input');
var sendButton = $('#send');
var chatList = $('#message-list');

sendButton.on('click', function(){
  chatBox.addMessage(createMessage('me', textInput.val()));
  chatList.prepend(chatBox.templater(textInput.val()));
  window.setTimeout(chatBox.respond, 3000, chatList, textInput.val());
  chatBox.clearInput(textInput);
  chatBox.buttonEnabler(textInput, sendButton);
});

textInput.on('keyup', function(){
  chatBox.buttonEnabler(textInput, sendButton);
});

// window.setInterval(update(), 1000);
//
// function update(){
//   chatBox.messages = [];
//   $('.message').each(chatBox.addMessage(createMessage($('.sender').text(), $('.message-content').text())));
// }

  // chatBox.addMessage(createMessage($('.sender'), $('.message-content'))));
