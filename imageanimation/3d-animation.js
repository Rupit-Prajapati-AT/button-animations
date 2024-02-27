$(document).ready(function () {
  const $body = $("body");
  const $layer1 = $body.find(".layer-1");
  const $layer2 = $body.find(".layer-2");

  $body.on("mousemove", function (e) {
    const { clientX: x, clientY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = $body[0];

    const xTranslateLayer1 = (x / width - 1) * 20;
    const yTranslateLayer1 = (y / height - 1) * 20;
    const xTranslateLayer2 = xTranslateLayer1 * 2;
    const yTranslateLayer2 = yTranslateLayer1 * 2;
    // const xTranslateLayer3 = xTranslateLayer1 * 0.5;
    // const yTranslateLayer3 = yTranslateLayer1 * 0.5;

    // $body.css(
    //   "transform",
    //   `translateX(${xTranslateLayer3}px) translateY(${yTranslateLayer3}px)`
    // );
    $layer1.css(
      "transform",
      `translateX(${xTranslateLayer1}px) translateY(${yTranslateLayer1}px)`
    );
    $layer2.css(
      "transform",
      `translateX(${xTranslateLayer2}px) translateY(${yTranslateLayer2}px)`
    );
  });
});
