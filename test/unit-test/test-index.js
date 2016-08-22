const assert = require('chai').assert
const chatBox = require('../../lib/chatbox.js');
const createMessage = require('../../lib/messages.js')
const index = require('../../index.js')
var $ = require('./jquery');

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

      });
      it('set a given button to "NOT disabled" if a given field has content', function(){

      });
    });

    context('drawToScreen method', function(){
      it('should return an html item with a remove button if the object passed in has a sender of "me"', function(){
      var message = createMessage('me', 'comment');
      var element;

      });
      it('should return an html item with NO remove button if the object passed in has a sender OTHER THAN "me"', function(){

      });
    });

    context('findMessageById method', function(){
      it('return an object from the messages array based on its id number', function(){
        it('return an object from the messages array based on its id number', function(){
          var num;
          chatBox.messages[0] = {id: 3};
          var foundObject = chatBox.findMessageById(3);
          assert.equal(foundObject.id, 3);
        });
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
