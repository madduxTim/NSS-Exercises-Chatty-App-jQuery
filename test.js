"use strict";

// This deals with the event buttons beside the navigation bar
let buttonDark = document.getElementById("dark"); 
let buttonLarge = document.getElementById("large"); 
let msgBox = document.getElementById("messageBox"); 

// // let buttonLarge = document.getElementById("large");

buttonDark.addEventListener("click", function() {
  msgBox.classList.toggle("dark");
});

buttonLarge.addEventListener("click", function() {
  msgBox.classList.toggle("large"); 
}); 
