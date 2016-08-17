const assert = require('chai').assert
const index = require('../../lib/index.js');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
  it('should see our index.js file', function(){
    assert.equal(index(), true);
  });
});
//
// describe('our button', function(){
//   it('should enable when text is entered in input', function(){
//     var someField = true;
//     buttonEnabler(someField, sendButton);
//     assert.equal(sendButton.attr('disabled', false), true);
//   });
// });
