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
      y: e.clientY - rect.top
    };
}

window.onload = function () {
    let canvas = document.getElementById("gameCanvas");
    let context = canvas.getContext("2d");

    const circle1X = 225;
    const circle2X = 250;
    const circle3X = 200;
    const circle4X = 225;

    const circle1Y = 120;
    const circle2Y = 145;
    const circle3Y = 145;
    const circle4Y = 170;

    const r = 10;

    if (context) {
        let img = new Image();
        img.src="img/game-controller.png";
        img.onload = function () {
            context.drawImage(img, 0, 0, 300, 300);
        }
        context.strokeStyle='white';
        
        context.beginPath();
        context.arc(circle1X,circle1Y,r,0,2*Math.PI);
        context.stroke();

        context.beginPath();
        context.arc(circle2X,circle2Y,r,0,2*Math.PI);
        context.stroke();
        
        context.beginPath();
        context.arc(circle3X,circle3Y,r,0,2*Math.PI);
        context.stroke();

        context.beginPath();
        context.arc(circle4X,circle4Y,r,0,2*Math.PI);
        context.stroke();
    }

    canvas.addEventListener("click", function (e) {
        e.preventDefault();
        let pos = getMousePos(canvas, e);
        if (pos.x < circle1X + r && pos.x > circle1X - r && pos.y < circle1Y + r && pos.y > circle1Y - r) {
            window.location = "index.html#section1";
        }

        if (pos.x < circle3X + r && pos.x > circle3X - r && pos.y < circle3Y + r && pos.y > circle3Y - r) {
            window.location = "index.html#section2";
        }

        if (pos.x < circle2X + r && pos.x > circle2X - r && pos.y < circle2Y + r && pos.y > circle2Y - r) {
            window.location = "index.html#section3";
        }

        if (pos.x < circle4X + r && pos.x > circle4X - r && pos.y < circle4Y + r && pos.y > circle4Y - r) {
            window.location = "index.html#section4";
        }
    })
}