var $ = require('./jquery');
var chatBox = require('./chatbox');
var createMessage = require('./messages');
var textInput = $('#input');
var sendButton = $('#send');
var chatList = $('#message-list');
var showMore = $('#show-more');

chatBox.fetch();
chatBox.renderAll(chatBox.messages, chatList);
chatBox.renderNext10($('.message'));

sendButton.on('click', function(){
  var userMessage = createMessage('me', textInput.val());
  var botMessage = createMessage('EchoBot', textInput.val(), (Date.now() + 1));
  chatBox.addMessage(userMessage);
  chatBox.addMessage(botMessage);
  chatBox.drawToScreen(userMessage, chatList);
  // chatBox.renderNext10($('.message', 9));
  window.setTimeout(chatBox.drawToScreen, 3000, botMessage, chatList);
  // chatBox.renderNext10($('.message', 9));
  chatBox.clearInput(textInput);
  chatBox.buttonEnabler(textInput, sendButton);
  chatBox.updateCount();
});

textInput.on('keyup', function(){
  chatBox.buttonEnabler(textInput, sendButton);
  chatBox.updateCount();
});

chatList.on('click', '.remove', function(){
  id = parseInt($(this).parent().attr('id'));
  chatBox.destroyMessage(id);
  chatBox.renderAll(chatBox.messages, chatList);
});

chatList.on('focusout', '.message-content',  function(){
  id = parseInt($(this).parent().attr('id'));
  var value = $('.message-content').text();
  chatBox.editMessage(id, value);
});
//
showMore.on('click', function(){
  chatBox.renderNext10($('.message'));
});
