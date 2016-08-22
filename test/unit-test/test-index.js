const assert = require('chai').assert
// const index = require('../../lib/index.js')
const chatBox = require('../../lib/chatbox.js');
const createMessage = require('../../lib/messages.js')
var $ = require('../../lib/jquery');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
  it('should see our chatBox.js file', function(){
    assert.isObject(chatBox, true);
  });
});

  describe('createMessage', function(){

    var message = createMessage('me', 'comment');

    it('should return an object with a specificed sender property', function(){
      assert.equal(message.sender, 'me');
    });
    it('should return an object with a specificed body property', function(){
      assert.equal(message.body, 'comment');
    });
    it('should return an object with a default id', function(){
      assert.isNotNaN(message.id);
    });
  });

  describe('chatBox object', function(){
    context('addMessage method', function(){

      var message = createMessage('me', 'comment');

      it('should take an object and push it into an array', function(){
        chatBox.messages = [];
        chatBox.addMessage(message);
        assert.equal(chatBox.messages.length, 1);
      });
    });

    context('buttonEnabler method', function(){
      it('set a given button to "disabled" if a given field is empty', function(){
        someField = $('#input');
        someButton = $('#send');
        someField.val('');
        chatBox.buttonEnabler(someField, someButton);
        assert.equal(someButton.attr('disabled'), true);


      });
      it('set a given button to "NOT disabled" if a given field has content', function(){
        someField = $('#input');
        someButton = $('#send');
        someField.val('something');
        chatBox.buttonEnabler(someField, someButton);
        assert.equal(someButton.attr('disabled'), false);

      });
    });

    context('drawToScreen method', function(){
      it('should return an html item with a remove button if the object passed in has a sender of "me"', function(){

      });
      it('should return an html item with NO remove button if the object passed in has a sender OTHER THAN "me"', function(){

      });
    });

    context('drawToScreen method', function(){
      it('should return an html item with a remove button if the object passed in has a sender of "me"', function(){
        // var message = {sender:'me', body: 'nothing', id:'43'};
        // var element = $('.message-list');
        // var item = chatBox.drawToScreen(message, element);
        // assert.equal(item, `<li class = 'message' id = '43'><span class='sender'>me: </span><span class='message-content' contenteditable = 'true'>'nothing'</span><button class='remove'></button></li>`);

      });
    });

    context('findMessageById method', function(){
      it('return an object from the messages array based on its id number', function(){

      });
    });
});
  //
  // describe('',function(){
  //   it('should', function(){
  //
  //   });
  // });
//
// describe('our button', function(){
//   it('should enable when text is entered in input', function(){
//     var someField = true;
//     buttonEnabler(someField, sendButton);
//     assert.equal(sendButton.attr('disabled', false), true);
//   });
// });
