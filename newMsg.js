"use strict"

var Chatty = (function(originalChatty) {
  originalChatty.existingMsg = function(eMsg) {
    let string = "";
    let toDom = document.getElementById("messageBox");
    for (let i = 0; i < eMsg.length; i++) {
      string +=  `<div class="msg">${eMsg[i].msg}`;
      string += "<button type='button' class='btn btn-default btn-xs delete'>";
      string += "<span class='glyphicon glyphicon-trash' aria-hidden='true'>";
      string += "</span> delete me!</button></div>";
    }
    toDom.innerHTML = string;
    originalChatty.addMsg(eMsg);
  },
  originalChatty.addMsg = function(eMsg) {
    document.getElementById("ack").addEventListener("keyup", function (event) {
       if (event.keyCode === 13) {
        eMsg.push("<div class='msg'>"+ event.target.value +"<button type='button' class='btn btn-default btn-xs delete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> delete me!</button></div>");
        document.getElementById("messageBox").innerHTML += eMsg[eMsg.length-1];
       }
    });
  }
  return originalChatty;
})(Chatty); 
Chatty.loadMessages(Chatty.existingMsg);
