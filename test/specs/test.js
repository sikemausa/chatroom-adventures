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
});
