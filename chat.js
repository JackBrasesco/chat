// Definitions are fun! _____________________________________________

var input = $("#input")
var chat = $("#lechat")

// The Master List... ______________________________________________

var chatlist = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    console.log("hgehee")
    var message = input.val();
    message = "<div>hi!</hi>"
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    jackIsDumb = "<div>his</div>"
    
    
    
    var cleanerUser = (String(jackIsDumb))
    var ccleanerUser = cleanerUser.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    
    var useUser = (ccleanerUser.bold().fontcolor(accountColor) + ": ".bold().fontcolor(accountColor) + antijosh)
    console.log("user user", useUser)
    addListItem("saylist", useUser);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  chatlist.push(r).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  var limit = chatlist.slice(chatlist.length - 20, chatlist.length);
  chat.html(limit.join("<br>"));
 })

