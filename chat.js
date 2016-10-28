var input = $("#input")

var chatlist = []

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val()
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    addListItem("saylist", antijosh);
  }
})

onNewListItem("saylist", function(r) {
  var limit = r.slice(leaderList.length - 5, leaderList.length - 0)           
 })