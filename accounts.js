//buttons!

$("#button").click(function() {
  $("#siscreen").css({display: "inline-block"});
})

$("#signup").click(function() {
  $(".su").css({display: "block"});
})

$("#return").click(function() {
  $("#siscreen").css({display: "none"});
})

//Create account

var newUser = $("#enteruser");

newUser.keydown(function(key) {
  if (key.keyCode == 13) {
    var user = newUser.val();
  }
})