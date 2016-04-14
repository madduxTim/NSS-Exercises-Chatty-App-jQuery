"use strict"

var Chatty = (function(originalChatty) { 
    originalChatty.addDeleteBtns = function() {
        originalChatty.clearBtn();    
        $(".delete").click(function(event) {
            $(this.parentNode.remove(this));
            originalChatty.clearCheck();   
        })
    },
    originalChatty.clearCheck = function() {
        if ($("#messageBox").html() === "") {
            $("#clear").attr("disabled", true);
        };
    },
    originalChatty.clearBtn = function () { 
        $("#clear").click(function () {
            $("#messageBox").html("");
            originalChatty.clearCheck();    
        });
    }
    return originalChatty;
})(Chatty);
Chatty.loadMessages(Chatty.addDeleteBtns);
