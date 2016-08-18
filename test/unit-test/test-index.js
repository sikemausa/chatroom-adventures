const assert = require('chai').assert
const chatbox = require('../../lib/chatbox.js');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
  it('should see our chatbox.js file', function(){
    assert.isObject(chatbox, true);
  });
});

  describe('')
//
// describe('our button', function(){
//   it('should enable when text is entered in input', function(){
//     var someField = true;
//     buttonEnabler(someField, sendButton);
//     assert.equal(sendButton.attr('disabled', false), true);
//   });
// });
