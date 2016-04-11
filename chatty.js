"use strict"; 

var Chatty = (function () {
  let messages = [];
  return {
    loadMessages: function (callBack) {
      let loader = new XMLHttpRequest(); 
      loader.open("GET", "messages.JSON");
      loader.send();
      loader.addEventListener("load", function () {
          messages = JSON.parse(this.responseText).messages;
          callBack(messages);
      });
    }
  }
 }());   