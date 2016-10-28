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
  var limit = r.slice(r.length - 20, r.length - 0)
  var clean = limit
  chatlist.push(limit)
  chat.html(chatlist)
 })

