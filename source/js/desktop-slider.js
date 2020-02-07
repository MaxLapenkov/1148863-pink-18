$(document).on("click", ".desktop__toggle--prev", function(e) {
  var selectedItem = $(".slider__list").find(".now");
  if (selectedItem.prev().is(".none")) {
    selectedItem.removeClass("now");
    selectedItem.addClass("none");
    selectedItem.prev().removeClass("none");
    selectedItem.prev().addClass("now");
  }
});
$(document).on("click", ".desktop__toggle--next", function(e) {
  var selectedItem = $(".slider__list").find(".now");
  if (selectedItem.next().is(".none")) {
    selectedItem.removeClass("now");
    selectedItem.addClass("none");
    selectedItem.next().removeClass("none");
    selectedItem.next().addClass("now");
  }
});
