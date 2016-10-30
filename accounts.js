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

//new user ------------------------------------------------

var newUser = $("#enteruser");

var clean = "blah"


//password check -------------------------------------------

var pass1 = $("#enterpass");
var pass2 = $("#passcheck");


//On button press Create ---------------------------------

create.click(function() {
  var accountstyle = $("#color").val()
  if (clean.length < 11) {
  user = newUser.val();
  clean = user.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  else {
    $("#toolong").css({display: "block"});
  }
  if (pass1.val() == pass2.val()) {
    var newPass = pass1.val()
  }
    else {
      $("#nomatch").css({display: "block"});
    }
  storeValue(clean,newPass)
  storeValue(newPass, accountstyle)
  pass1.val("")
  pass2.val("")
  newUser.val("")
  $("#color").val("")
})

//Sign In ----------------------------------------------------

var username = $("#username");

var password = $("#password");

var realUser = "anonymous user"

//Sign in session -------------------------------------------

var signedin = 0
var session = {
  name: realUser
}

//color------------------------------------------

var accountColor = "black"

//On button press Log in--------------

$("#signbutton").click(function() {
  $("#wrong").css({display: "none"})
  $("#right").css({display: "none"})
   realUser = username.val()
  var realPass = password.val()
  once(realUser, function(password) {
    if (password == realPass) {
      $("#right").css({display: "block"});
      console.log(session.name)
      signedin = 1
    }
    else {
      $("#wrong").css({display: "block"});
    }
    once(realPass, function(color) {
      accountColor = color
      console.log(accountColor);
    })
      
  })
})



//-----------------------------------------------------------

