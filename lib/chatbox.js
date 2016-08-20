var $ = require('./jquery');
var createMessage = require('./messages');
var textInput = $('#input');
var count = $('#counter');

var chatBox = {

  messages: [],

  addMessage: (message) => {
    chatBox.messages.push(message);
    chatBox.store(chatBox.messages);
    // element.prepend(chatBox.templater(message.sender, message.body, message.id));
  },

  store: (array) => {localStorage.setItem('messages', JSON.stringify(array))},

  buttonEnabler: (field, button) => {button.attr('disabled', !field.val())},

  clearInput: (field) => {return field.val('')},

  drawToScreen: (message, element) => {
    var item;
    if (message.sender === 'me'){
      item = `<li class = 'message' id = '${message.id}'><span class='sender'>${message.sender}: </span><span class='message-content' contenteditable = 'true'>${message.body}</span><button class='remove'>Un-holla</button></li>`;}
    else {
      item = `<li class = 'message' id = '${message.id}'><span class='sender'>${message.sender}: </span><span class='response-content'>${message.body}</span></li>`;}
    element.prepend(item);
  },

  fetch: function(){
    var storedMessages = JSON.parse(localStorage.getItem('messages'));
    if(storedMessages){chatBox.messages = storedMessages;}
  },

  renderAll: (array, element) => {
    element.children().remove();
    array.forEach(obj =>
      chatBox.drawToScreen(obj, element));
    },

  updateCount: () => {var counter = textInput.val().length;
    count.html(counter);},

  findMessageById: (num) => {
    return chatBox.messages.find(obj =>
      {if (num === obj.id){return obj;}});
  },

  destroyMessage: (id) => {
    var message = chatBox.findMessageById(id);
    var index = chatBox.messages.indexOf(message);
    chatBox.messages.splice(index, 1);
    chatBox.store(chatBox.messages);
  }
};

module.exports = chatBox;
