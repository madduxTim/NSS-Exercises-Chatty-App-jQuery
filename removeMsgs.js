"use strict"

var Chatty = (function(originalChatty) { 
    originalChatty.addDeleteBtns = function() {
        originalChatty.clearBtn();    
        document.querySelector("body").addEventListener("click", function(event) {
        if (event.target.className === "btn btn-default btn-xs delete") {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
            originalChatty.clearCheck();   
        }
        });
    },
    originalChatty.clearCheck = function() {
        if (document.getElementById("messageBox").innerHTML === "") {
            document.getElementById("clear").setAttribute("disabled", true);
        };
    },
    originalChatty.clearBtn = function () { 
        document.getElementById("clear").addEventListener("click", function () {
            document.getElementById("messageBox").innerHTML = "";
            originalChatty.clearCheck();    
        });
    }
    return originalChatty;
})(Chatty);
Chatty.loadMessages(Chatty.addDeleteBtns);
