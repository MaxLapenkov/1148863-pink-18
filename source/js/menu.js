var toggle = document.querySelector(".toggle");
var nav = document.querySelector(".main-nav");
var open = document.querySelector(".open");
var close = document.querySelector(".close");
var add = document.querySelector(".addition");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  nav.classList.toggle("none");
  if (nav.classList.contains("none")) {
    open.classList.add("none");
    close.classList.remove("none");
    add.classList.remove("darkerbg");
  } else {
    open.classList.remove("none");
    close.classList.add("none");
    add.classList.add("darkerbg");
  }
});
