var $ = require('./jquery');

var createMessage = require('./messages');

var textInput = $('#input');

var count = $('#counter');


var chatBox = {

  messages: [],

  addMessage: (message, element) => {
    chatBox.messages.push(message);
    chatBox.store(chatBox.messages);
    element.prepend(chatBox.templater(message.sender, message.body));
  },

  store: (array) => {localStorage.setItem('messages', JSON.stringify(array))},

  buttonEnabler: (field, button) => {button.attr('disabled', !field.val())},

  clearInput: (field) => {return field.val('')},

  templater: (sender, message) => {
    return `<li class = 'message'><span class='sender'>${sender}: </span><span class='message-content'>${message}</span></li>`;
  },

  renderAll: (array, element) => {
    array.forEach(element.prepend(chatBox.templater([i].sender, [i].body)));},

  updateCount: () => {var counter = textInput.val().length;
    count.html(counter);

  }
};




module.exports = chatBox;
