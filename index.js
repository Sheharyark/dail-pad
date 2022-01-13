var count = 0;

$(".numbr").on('click', function() {
  var num = ($(this).clone().children().remove().end().text());
  if (count < 11) {
    $("#screen").append('<span>' + num.trim() + '</span>');

    count++;
  }
});

$("#arrow").on('click', function() {
  $('#screen span:last-child').remove();
  count--;
});
