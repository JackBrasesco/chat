// Definitions are fun! _____________________________________________

var input = $("#input")
var chat = $("#lechat")

var digitChecker = "f"
// The Master List... ______________________________________________

var chatlist = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val();
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var cleanerUser = (String(jackIsDumb))
    var ccleanerUser = cleanerUser.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    if (ccleanerUser.length < 10) {
      digitChecker = "t"
    }
    if (ccleanerUser.length > 9) {
      digitChecker = "f"
    }
    var useUser = (ccleanerUser + ": " + antijosh + userLength + digitChecker)
    addListItem("saylist", useUser);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  var reclean = (r.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
  chatlist.push(reclean)
  var limit = chatlist.slice(chatlist.length - 20, chatlist.length);
  chat.html(limit.join("<br>"));
 })

