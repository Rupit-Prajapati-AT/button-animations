$(document).ready(function () {
  var card = $(".card");
  $(document).on("mousemove", function (e) {
    var ax = -($(window).innerWidth() / 2 - e.pageX) / 40;
    var ay = ($(window).innerHeight() / 2 - e.pageY) / 20;
    card.attr(
      "style",
      "transform: rotateY(" +
        ax +
        "deg) rotateX(" +
        ay +
        "deg);-webkit-transform: rotateY(" +
        ax +
        "deg) rotateX(" +
        ay +
        "deg);-moz-transform: rotateY(" +
        ax +
        "deg) rotateX(" +
        ay +
        "deg)"
    );
  });
});
