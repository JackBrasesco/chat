var input = $("#input")

var chatlist = []

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val()
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    addListItem("saylist", antijosh);
  }
})

onNewListItem("saylist", function