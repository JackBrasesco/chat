//buttons! ----------------------------------------------------

$("#button").click(function() {
  $("#siscreen").css({display: "inline-block"});
})

$("#signup").click(function() {
  $(".su").css({display: "block"});
})

$("#return").click(function() {
  $("#siscreen").css({display: "none"});
})

//Create account ----------------------------------------------

//new user -------------

var newUser = $("#enteruser");

var user = "blah

newUser.keydown(function(key) {
  if (key.keyCode == 13) {
    var user = newUser.val();
  }
})

//password check -------

var pass1 = $("#enterpass");