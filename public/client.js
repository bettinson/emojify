// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html








var flirty = ['😛', '😉', '😏', '🔥', '😍', '😳', '💦', '👅', '🍆', '😡', ''];
var trap = ['💦', '😂', '👌', '😋', '💀', '💯', '😳', '💦', '😤', '😤💨', '🔥'];

$(function() {
  console.log('hello world :o');
  
  // $.get('/dreams', function(dreams) {
  //   dreams.forEach(function(dream) {
  //     $('<li></li>').text(dream).appendTo('ul#dreams');
  //   });
  // });

  $('form').submit(function(event){
    event.preventDefault();
    var post_emoji = "";
    var pre_emoji = $('input').val();
    for (var i = 0; i < pre_emoji.length; i++) {
      if (pre_emoji.charAt(i) == ' ' && Math.floor(Math.random() * trap.length) < (trap.length / 2)) {
        var emojis = trap.concat(flirty)
        var emoji = emojis[Math.floor(Math.random() * emojis.length)];
        post_emoji += ' ' + emoji + ' ';
      } else {
        post_emoji += pre_emoji.charAt(i);
      }
    }
    $(".output" ).empty();
    $(".output").append("<p>" + post_emoji + "</p>");
  });
});