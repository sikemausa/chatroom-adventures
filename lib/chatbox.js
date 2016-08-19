var $ = require('./jquery');
var createMessage = require('./messages');


var chatBox = {

  messages: [],

  addMessage: (message) => {chatBox.messages.push(message); chatBox.store(chatBox.messages)},

  store: (array) => {localStorage.setItem('messages', JSON.stringify(array))},

  buttonEnabler: (field, button) => {button.attr('disabled', !field.val())},

  clearInput: (field) => {return field.val('')},

  templater: (message) => {
    return `<li class = 'message'><span class='sender'>Me: </span><span class='message-content'>${message}</span></li>`;
  },

  respond: (element, message) => {
    chatBox.addMessage(createMessage('EchoBot', message));
    element.prepend(`<li class = 'response'><span class='sender'>EchoBot: </span><span class='response-content'>${message}</span></li>`);
  }

};

module.exports = chatBox;
