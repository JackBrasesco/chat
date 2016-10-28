var input = $("#input")
var chat = $("#lechat")

var chatlist = []

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val()
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    addListItem("saylist", antijosh);
    input.val("")
  }
})

onNewListItem("saylist", function(r) {
  chatlist.push(r)
  var limit = chatlist.slice(chatlist.length - 25, chatlist.length)
  chat.html(limit.join("<br>"))
 })

