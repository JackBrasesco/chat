// Definitions are fun! _____________________________________________

var input = $("#input")
var chat = $("#lechat")

var digitChecker = "f"
// The Master List... ______________________________________________

var chatlist = []

//Dating?-----------------------------------------------------------

//var getMessageHour = new Date().getHours()
//var usableTimeHour = getMessageHour.toString()
//var millitaryTimeIsDumb = usableTimeHour.replace(/13/g, "1").replace(/14/g, "2").replace(/15/g, "3").replace(/16/g, "4").replace(/17/g, "5").replace(/18/g, "6").replace(/19/g, "7").replace(/20/g, "8").replace(/21/g, "9").replace(/22/g, "10").replace(/23/g, "11").replace(/24/g, "12")
//var getMessageMinute = new Date().getMinutes()
//var usableTimeMinute = getMessageMinute.toString()
//var timeForMessages = ("This message was sent at " + millitaryTimeIsDumb + ":" + usableTimeMinute)
//console.log(timeForMessages)

var timeListThing = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val();
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var cleanerUser = (String(jackIsDumb));
    var ccleanerUser = cleanerUser.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var getMessageHour = new Date().getHours()
    var usableTimeHour = getMessageHour.toString()
    var millitaryTimeIsDumb = usableTimeHour.replace(/13/g, "1").replace(/14/g, "2").replace(/15/g, "3").replace(/16/g, "4").replace(/17/g, "5").replace(/18/g, "6").replace(/19/g, "7").replace(/20/g, "8").replace(/21/g, "9").replace(/22/g, "10").replace(/23/g, "11").replace(/24/g, "12")
    var getMessageMinute = new Date().getMinutes()
    var usableTimeMinute = getMessageMinute.toString()
    if (usableTimeMinute.length == 1) {
      usableTimeMinute = ("0" + usableTimeMinute)
    }
    var timeForMessages = (millitaryTimeIsDumb + ":" + usableTimeMinute)
    addListItem("saylist", ccleanerUser +"\\\," + antijosh + "\\\," + accountColor + "\\\," + timeForMessages + "\\\," + usableTimeHour);
    input.val("");
  }
})

// Display when new things are added _______________________________

onNewListItem("saylist", function(r) {
  var chatObject = {
    username: "",
    color: "",
    message: "",
    time: "",
  }
  var reclean = (r.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  chatObject.username = (reclean.split("\\\,")[0]);
  chatObject.color = (reclean.split("\\\,")[2]);
  chatObject.message = (reclean.split("\\\,")[1]);
  chatObject.time = (reclean.split("\\\,")[3]);
  var hourForChecking = (reclean.split("\\\,")[4]);
  var lookForCommand = chatObject.message
  var isImg = lookForCommand.indexOf("/img")
  var isHelp = lookForCommand.indexOf("/help")
  if (isHelp > -1) {
    
  }
  if (isImg > -1) {
    var imgSrc = (lookForCommand.split("/img"))[1];
    chatObject.message = ("<img src='" + imgSrc +"' />")
  }
  addListItem("TimeCheck",hourForChecking);
  var finalMessage = ((chatObject.time) + "<br>" + (chatObject.username).bold().fontcolor(chatObject.color) + ": ".bold().fontcolor(chatObject.color) + chatObject.message)
  chatlist.push(finalMessage);
  var limit = chatlist.slice(chatlist.length - 26, chatlist.length);
  chat.html(limit.join("<br>"));
 })

