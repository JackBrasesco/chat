//On click Direct Messages -------------------------------------

$("#dm").click(function() {
  $("#dmscreen").css({display: "inline-block"})
})

$("#return2").click(function() {
  $("#dmscreen").css({display: "none"})
})

//stuff --------------------------------------------------------

var dminput = $("#dm-input");

var newChat = $("#newChat");

//Start new Chat------------------------------------------------

newChat.keydown(function(e) {
  if (e.keyCode == 13) {
    var startChatWith = newChat.val()
    once("listOfUsers", function(personReal) {
      
    })
  }
})