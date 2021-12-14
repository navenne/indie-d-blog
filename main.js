{
  const img = new Image();
  img.src = "img/game-controller.png";
  const img2 = new Image();
  img2.src = "img/game-controller-shadow.png";
  let i = 0;
  let rootElement = document.documentElement

  window.onload = function () {
    const canvas = document.getElementById("gameCanvas");
    const context = canvas.getContext("2d");

    const circle1X = 225;
    const circle2X = 250;
    const circle3X = 200;
    const circle4X = 225;

    const circle1Y = 115;
    const circle2Y = 140;
    const circle3Y = 140;
    const circle4Y = 165;

    const r = 10;

    const offset = 6;

    if (context) {
      context.drawImage(img2, offset, 0, 300, 300);
      context.drawImage(img, 0, 0, 300, 300);

      context.lineWidth = 8;
      context.strokeStyle = "#6f2dbd";

      drawCircle(context, circle1X + offset, circle1Y, r);
      drawCircle(context, circle2X + offset, circle2Y, r);
      drawCircle(context, circle3X + offset, circle3Y, r);
      drawCircle(context, circle4X + offset, circle4Y, r);

      context.strokeStyle = "white";

      drawCircle(context, circle1X, circle1Y, r);
      drawCircle(context, circle2X, circle2Y, r);
      drawCircle(context, circle3X, circle3Y, r);
      drawCircle(context, circle4X, circle4Y, r);
    }

    canvas.addEventListener("click", function (e) {
      e.preventDefault();
      let pos = getMousePos(canvas, e);

      // Flechas arriba y abajo

      if (pos.x < 90 && pos.x > 65 && pos.y < 130 && pos.y > 100) {
        scrollToTop();
      }

      if (pos.x < 90 && pos.x > 65 && pos.y < 175 && pos.y > 145) {
          scrollToBottom();
      }

      // Botones circulares

      if (
        pos.x < circle1X + r &&
        pos.x > circle1X - r &&
        pos.y < circle1Y + r &&
        pos.y > circle1Y - r
      ) {
        window.location = "index.html#section1";
      }

      if (
        pos.x < circle3X + r &&
        pos.x > circle3X - r &&
        pos.y < circle3Y + r &&
        pos.y > circle3Y - r
      ) {
        window.location = "index.html#section2";
      }

      if (
        pos.x < circle2X + r &&
        pos.x > circle2X - r &&
        pos.y < circle2Y + r &&
        pos.y > circle2Y - r
      ) {
        window.location = "index.html#section3";
      }

      if (
        pos.x < circle4X + r &&
        pos.x > circle4X - r &&
        pos.y < circle4Y + r &&
        pos.y > circle4Y - r
      ) {
        window.location = "index.html#section4";
      }
    });

    canvas.addEventListener("mousemove", function (e) {
      e.preventDefault();

      const fontSize = 16;
      context.font = `${fontSize}px VT323`;

      const text1 = "CLICK";
      const text2 = "BUTTONS";
      const text3 = "TO NAVIGATE!";

      context.fillStyle = getColor();

      drawText(
        context,
        fontSize,
        text1,
        canvas.width / 2 - Math.ceil(context.measureText(text1).width / 2),
        canvas.height / 2 - fontSize,
        Math.ceil(context.measureText(text1).width),
        fontSize * 0.8
      );
      drawText(
        context,
        fontSize,
        text2,
        canvas.width / 2 - Math.ceil(context.measureText(text2).width / 2),
        canvas.height / 2,
        Math.ceil(context.measureText(text2).width),
        fontSize * 0.8
      );
      drawText(
        context,
        fontSize,
        text3,
        canvas.width / 2 - Math.ceil(context.measureText(text3).width / 2),
        canvas.height / 2 + fontSize,
        Math.ceil(context.measureText(text3).width),
        fontSize * 0.8
      );
    });
  };

  /**
   * Obtiene posición del ratón con respecto al canvas
   * @param {*} canvas
   * @param {*} e
   * @returns pos
   */
  function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  /**
   * Dibuja un círculo
   * @param {*} context
   * @param {*} x
   * @param {*} y
   * @param {*} r
   */
  function drawCircle(context, x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.stroke();
  }

  function drawText(context, fontSize, text, x, y, width, height) {
    context.clearRect(x, y - fontSize / 1.5, width, height);
    context.fillText(text, x, y);
  }

  function getColor() {
    const colors = [
      "#B298DC",
      "#B298DC",
      "#B298DC",
      "#B298DC",
      "#B8D0EB",
      "#B8D0EB",
      "#B8D0EB",
      "#b9faf8",
      "#b9faf8",
      "white",
    ];
    i = i >= colors.length ? 0 : i + 1;
    return colors[i];
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToBottom() {
    rootElement.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
  }
}
