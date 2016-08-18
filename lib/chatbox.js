var $ = require('./jquery');
var textInput = $('#input');
var sendButton = $('#send');
var chatList = $('#message-list');

var chatBox = {

  buttonEnabler: (field, button) => button.attr('disabled', !field.val()),

  clearInput: (field) => {return field.val('');},

  templater: (message) => {
    return `<li class = 'message'>Me: <span class='message-content'>${message}</span></li>`;
  },

  respond: (element, message) => {
    element.prepend(`<li class = 'response'>EchoBot: <span class='response-content'>${message}</span></li>`);
  }
};

sendButton.on('click', function(){
  chatList.prepend(chatBox.templater(textInput.val()));
  window.setTimeout(chatBox.respond, 3000, chatList, textInput.val());
  chatBox.clearInput(textInput);
  chatBox.buttonEnabler(textInput, sendButton);
});

textInput.on('keyup', function(){
  chatBox.buttonEnabler(textInput, sendButton);
});

module.exports = chatBox;
