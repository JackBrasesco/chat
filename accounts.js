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


//password check -------

var pass1 = $("#enterpass");
var pass2 = $("#passcheck");

//On button press ------

create.click(function() {
  user = newUser.val();
  console.log(user)
  console.log(pass1)
  console.log(pass2)
  if (pass1 == pass2) {
    var newPass = pass1
  }
  else {
    $("#nomatch").css({display: "block"})
  }

})

