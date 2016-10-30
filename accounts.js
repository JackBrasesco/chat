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

var user = "blah"

var checkList = []


//password check -------------------------------------------

var pass1 = $("#enterpass");
var pass2 = $("#passcheck");


//On button press Create ---------------------------------

create.click(function() {
  if (checkList.indexOf(newUser.val() > 0)) {
      console.log("hello")
      console.log(checkList)
      }
  if (user.length < 11) {
  user = newUser.val();
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
  checkList.push(user)
  storeValue(user,newPass)
  pass1.val("")
  pass2.val("")
  newUser.val("")
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
  })
})



//-----------------------------------------------------------

