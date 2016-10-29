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

var create = $("#create");

//new user -------------

var newUser = $("#enteruser");

var user = "blah"

create.click(function() {
  
    user = newUser.val();
    console.log(user)
  
})

//password check -------

var pass1 = $("#enterpass");
var pass2 = $("#passcheck");

