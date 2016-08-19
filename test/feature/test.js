const assert = require('assert');

describe('welcome page', function(){
  it('webpage should have a title', function(){
    // when I visit the root of your application
    browser.url('/');
    // there should be a title on your webpage
    var title = browser.getTitle();
    console.log(title);
    assert.equal(title, 'Holla!');
  });
  it('homepage should have an h1', function(){
    browser.url('/');
    var content = browser.getText('h1');
    assert.equal(content, 'Holla!');
  });
});

describe('Send button', function (){
  it('send button should be disabled by default', function(){
    var value = browser.isEnabled('#send');
    assert.equal(value, false);
  });
  it('send button should be enabled when the input contains text', function(){
    var input = browser.element('#input');
    input.setValue('words');
    var value = browser.isEnabled('#send');
    assert.equal(value, true);
  });
  // it('should be disabled when text is deleted from input', function(){
  //   var input = browser.element('#input');
  //   input.setValue('monkeybutt');
  //   browser.clearElement('#input');
  //     var value = browser.isEnabled('#send');
  //     assert.equal(value, false);
  //
  //   });

  it('should clear input field when send button is pushed', function(){
    var input = browser.element('#input');
    input.setValue('shortish');
    browser.click('#send');
    var value = browser.getValue('#input');
    assert.equal(value, "");
  });
  it('should display the message when send button is pushed', function(){
    var input = browser.element('#input');
    input.setValue('shortish');
    // browser.click('#send');
    var text = browser.getText('.message-content');
    assert.equal(text, 'shortish');
  });
  it('should display a message from echoBot, equal to the previous message, after a delay', function () {
      var echo = browser.element('.response-content');
      echo.waitForExist(5000);
      assert.equal(echo.getText(), 'shortish');
  });
});
describe('Live character counter', function(){
  it('should increase as characters are added', function(){
    var counter = browser.element('#counter');
    var input = browser.element('#input');
    input.setValue('word');
    var counterValue = parseInt(browser.getText('#counter'));
    assert.equal(counterValue, 4);
  });
});
