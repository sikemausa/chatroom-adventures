var $ = require('./jquery');
var chatBox = require('./chatbox');
var createMessage = require('./messages');
var textInput = $('#input');
var sendButton = $('#send');
var chatList = $('#message-list');
var showMore = $('#show-more');

chatBox.fetch();
chatBox.renderAll(chatBox.messages, chatList);
chatBox.checkNumOfMessages($('.message'));

sendButton.on('click', function(){
  var userMessage = createMessage('me', textInput.val());
  var botMessage = createMessage('EchoBot', textInput.val(), (Date.now() + 1));
  chatBox.addMessage(userMessage);
  chatBox.addMessage(botMessage);
  chatBox.drawToScreen(userMessage, chatList);
  chatBox.checkNumOfMessages($('.message'));
  window.setTimeout(chatBox.callChatBot, 1500, botMessage, chatList);
  chatBox.clearInput(textInput);
  chatBox.buttonEnabler(textInput, sendButton);
  chatBox.updateCount();
});

textInput.on('keyup', function(){
  chatBox.buttonEnabler(textInput, sendButton);
  chatBox.updateCount();
});

chatList.on('click', '.remove', function(){
  var id = parseInt($(this).parent().attr('id'));
  chatBox.destroyMessage(id);
  chatBox.renderAll(chatBox.messages, chatList);
  chatBox.checkNumOfMessages($('.message'));
});

chatList.on('focusout', '.message-content',  function(){
  var id = parseInt($(this).parent().attr('id'));
  var value = $(this).text();
  chatBox.editMessage(id, value);
});

showMore.on('click', function(){
  chatBox.show10More($('.message'));
});
