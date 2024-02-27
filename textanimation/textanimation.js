$(document).ready(function () {
  const $body = $("body");
  const $text = $body.find("h1");

  let range = 20 * 2; // 20 px * 2

  function shadow(e) {
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    // height and width of body
    const { offsetWidth: width, offsetHeight: height } = $body[0];

    const xRange = Math.round((x / width) * range - range / 2);
    const yRange = Math.round((y / height) * range - range / 2);
    $text.css(
      "text-shadow",
      `${xRange}px ${yRange}px 0 rgba(255, 0, 255, 0.7)`
    );
  }

  $body.on("mousemove", shadow);
});
