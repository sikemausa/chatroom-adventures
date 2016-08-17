const $ = require('jquery');

var textInput = $('#input');
var sendButton = $('#send');
var newThing = true;

function buttonEnabler(field, button){
  var isFieldFull = field.val();
  button.attr('disabled', !isFieldFull);
}

textInput.on('keyup', function(){
  buttonEnabler(textInput, sendButton);
});

module.exports = newThing;
