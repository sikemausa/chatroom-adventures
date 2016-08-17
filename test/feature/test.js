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
  it('homepage send button should be disabled by default', function(){
    var value = browser.isEnabled('#send');
    assert.equal(value, false);
  });
  it('homepage send button should be enabled when the input contains text', function(){
    var input = browser.element('#input');
    input.setValue('words');
    var value = browser.isEnabled('#send');

    assert.equal(value, true);
  });
});
