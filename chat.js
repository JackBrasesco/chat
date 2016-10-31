// Definitions are fun! _____________________________________________

var input = $("#input")
var chat = $("#lechat")

// The Master List... ______________________________________________

var chatlist = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val();
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var cleanerUser = (String(jackIsDumb))
    var ccleanerUser = cleanerUser.replace(/</g, "&lt;").replace(/>/g, "&gt;")  
    var useUser = (ccleanerUser + ": " + antijosh)
    addListItem("saylist", useUser);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  var reclean = (r.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
  var almostdone = reclean.substring(0,jackIsDumb.lenth + 1)
  var sexyify = almostdone.bold().fontcolor(accountColor)
  chatlist.push(sexyify)
  var limit = chatlist.slice(chatlist.length - 20, chatlist.length);
  chat.html(limit.join("<br>"));
 })

