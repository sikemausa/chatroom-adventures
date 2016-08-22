const assert = require('chai').assert
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

  // describe('createMessage', function(){
  // 
  //   var message = createMessage('me', 'comment');
  //
  //   it('should return an object with a specificed sender property', function(){
  //     assert.equal(message.sender, 'me');
  //   });
  //   it('should return an object with a specificed body property', function(){
  //     assert.equal(message.body, 'comment');
  //   });
  //   it('should return an object with a default id', function(){
  //     assert.isNotNaN(message.id);
  //   });
  // });

  describe('chatBox object', function(){
    context('addMessage method', function(){

      var message = createMessage('me', 'comment');

      it('should take an object and push it into an array', function(){
        chatBox.messages = [];
        chatBox.addMessage(message);
        assert.equal(chatBox.messages.length, 1);
      });
    });

    context('findMessageById method', function(){
      it('return an object from the messages array based on its id number', function(){
        chatBox.messages[0] = {id: 3};
        var foundObject = chatBox.findMessageById(3);
        assert.equal(foundObject.id, 3);
      });
    });
});
