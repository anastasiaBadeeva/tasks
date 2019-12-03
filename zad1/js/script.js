'use strict';
let a = document.querySelector(".icon");
a.addEventListener("click", myFunction )
function myFunction() {
  let menu = document.querySelector(".menu");
  if (menu.className === "menu") {
    menu.className += " change";
  } else {
    menu.className = "menu";
  }
}