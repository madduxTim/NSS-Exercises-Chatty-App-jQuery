// "use strict"

var Chatty = (function () {
let messages = [];
  return {
    loadMessages: function (callBack) {
      $.ajax({
        url: "messages.json"
      }).done(function(data) {
        messages = data.messages;
        callBack(messages);
      });
    }
  }
 }());

$(document).ready(function() {
  $("#dark").click(function() {
    $("#messageBox").toggleClass("dark");
  });
  $("#large").click(function() {
    $("#messageBox").toggleClass("large");
  });
});