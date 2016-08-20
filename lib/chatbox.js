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
    if (sender === 'me'){
      return `<li class = 'message'><span class='sender'>${sender}: </span><span class='message-content' contenteditable = 'true'>${message}</span><button class='remove'>Un-holla</button></li>`;}
    else {
      return `<li class = 'message'><span class='sender'>${sender}: </span><span class='response-content'>${message}</span></li>`;}
  },

  fetch: function(){
    var storedMessages = JSON.parse(localStorage.getItem('messages'));
    if(storedMessages){chatBox.messages = storedMessages;}
  },

  renderAll: (array, element) => {
    element.children().remove();
    array.forEach(obj =>
      chatBox.addMessage(obj, element));
    },

  updateCount: () => {var counter = textInput.val().length;
    count.html(counter);
  }
};




module.exports = chatBox;
