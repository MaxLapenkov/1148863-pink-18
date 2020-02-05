var link = document.querySelector(".toggle1");
var link2 = document.querySelector(".toggle2");
var link3 = document.querySelector(".toggle3");
var slide1 = document.querySelector(".review__item--niko");
var slide2 = document.querySelector(".review__item--sergey");
var slide3 = document.querySelector(".review__item--ivan");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  link.classList.add("toggle--active");
  link2.classList.remove("toggle--active");
  link3.classList.remove("toggle--active");
  slide1.classList.remove("none");
  slide2.classList.add("none");
  slide3.classList.add("none");
});
link2.addEventListener("click", function(evt) {
  evt.preventDefault();
  link2.classList.add("toggle--active");
  link.classList.remove("toggle--active");
  link3.classList.remove("toggle--active");
  slide2.classList.remove("none");
  slide1.classList.add("none");
  slide3.classList.add("none");
});
link3.addEventListener("click", function(evt) {
  evt.preventDefault();
  link3.classList.add("toggle--active");
  link2.classList.remove("toggle--active");
  link.classList.remove("toggle--active");
  slide3.classList.remove("none");
  slide2.classList.add("none");
  slide1.classList.add("none");
});
