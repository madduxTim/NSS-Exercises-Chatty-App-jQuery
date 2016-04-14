"use strict"

var Chatty = (function(originalChatty) {
  originalChatty.existingMsg = function(eMsg) {
    let string = "";
    for (let i = 0; i < eMsg.length; i++) {
      string +=  `<div class="msg">${eMsg[i].msg}`;
      string += "<button type='button' class='btn btn-default btn-xs delete'>";
      string += "<span class='glyphicon glyphicon-trash' aria-hidden='true'>";
      string += "</span> delete me!</button></div>";
    }
    $("#messageBox").append(string);
    originalChatty.addMsg(eMsg);
  },
  originalChatty.addMsg = function(eMsg) {
    $("#ack").keyup(function (event) {
       if (event.keyCode === 13) {
        eMsg.push("<div class='msg'>"+ event.target.value +"<button type='button' class='btn btn-default btn-xs delete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> delete me!</button></div>");
        $("#messageBox").append(eMsg[eMsg.length-1]);
        originalChatty.addDeleteBtns();
       };
    });
  }
  return originalChatty;
})(Chatty); 
Chatty.loadMessages(Chatty.existingMsg);