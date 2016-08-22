var $ = require('./jquery');
var createMessage = require('./messages');
var textInput = $('#input');
var count = $('#counter');

var chatBox = {
  messages: [],

  displayCounter: 10,

  addMessage: message => {
    chatBox.messages.push(message);
    chatBox.store(chatBox.messages);
  },

  store: (array) => {
    localStorage.setItem('messages', JSON.stringify(array));
  },

  buttonEnabler: (field, button) => {
    button.attr('disabled', !field.val());
  },

  clearInput: (field) => {
    return field.val('');
  },

  drawToScreen: (message, element) => {
    var item;
    if (message.sender === 'me'){
      item = `<li class = 'message' id = '${message.id}'><span class='sender'>${message.sender}: </span><span class='message-content' contenteditable = 'true'>${message.body}<button class='remove'>Un-holla</button></span></li>`;}
    else {
      item = `<li class = 'message response' id = '${message.id}'><span class='sender'>${message.sender}: </span><span class='response-content'>${message.body}</span></li>`;}
    element.append(item);
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  },

  fetch: () => {
    var storedMessages = JSON.parse(localStorage.getItem('messages'));
    if(storedMessages){chatBox.messages = storedMessages;}
  },

  renderAll: (array, element) => {
    element.children().remove();
    array.forEach(obj =>
      chatBox.drawToScreen(obj, element));
    },

  updateCount: () => {
    var counter = textInput.val().length;
    count.html(counter);
  },

  findMessageById: (num) => {
    return chatBox.messages.find(obj =>
      {if (num === obj.id){return obj;}});
  },

  destroyMessage: (id) => {
    var message = chatBox.findMessageById(id);
    var index = chatBox.messages.indexOf(message);
    chatBox.messages.splice(index, 1);
    chatBox.store(chatBox.messages);
  },

  editMessage: (id, newValue) => {
    var message = chatBox.findMessageById(id);
    message.body = newValue;
    chatBox.store(chatBox.messages);
  },

  checkNumOfMessages: (li, num = chatBox.displayCounter) => {
    var items = li.toArray();
    var cutPoint = items.length - num;
    items.forEach(function(obj){
      if (items.indexOf(obj) >= cutPoint){obj.hidden = false;}
      if (items.indexOf(obj) < cutPoint){obj.hidden = true;}
    });
  },

  show10More: (li) => {
    chatBox.checkNumOfMessages(li, (chatBox.displayCounter + 10));
    chatBox.displayCounter = chatBox.displayCounter + 10;
  },

  callChatBot: (message, element) => {
    chatBox.drawToScreen(message, element);
    chatBox.checkNumOfMessages($('.message'));
  }
};

module.exports = chatBox;
