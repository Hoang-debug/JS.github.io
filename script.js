const c = document.getElementById("myCanvas");
c.height = window.innerHeight;
c.width = window.innerWidth;
const rectangle = c.getContext("2d");
const circle = c.getContext("2d");
const dot = c.getContext("2d");

rectangle.fillStyle = "#cfecf7";
rectangle.fillRect(0, 0, c.width, c.height);

function DrawRectangle(y, hex1, hex2) {
  const gradient = rectangle.createLinearGradient(0, y, 0, c.height);
  gradient.addColorStop(0, hex1);
  gradient.addColorStop(1, hex2);

  rectangle.fillStyle = gradient;
  rectangle.fillRect(0, y, c.width, c.height);
}

function Drawsky(OffSet) {
  DrawRectangle(OffSet, "#ffe26900", "#ffe269");
  DrawRectangle(OffSet + 100, "#ffcb6900", "#ffcb69");
  DrawRectangle(OffSet + 200, "#f98d7700", "#f98d77");
  DrawRectangle(OffSet + 500, "#e65c6f00", "#e65c6f");
}

Drawsky(-100);

function Drawcircle(x, y, innerRadius, x, y, outerRadius, radius, hex1, hex2) {
  var gradient = circle.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
  gradient.addColorStop(0, hex1);
  gradient.addColorStop(1, hex2);

  circle.arc(x, y, radius, 0, 2 * Math.PI);

  circle.fillStyle = gradient;
  circle.fill();
}

function DrawSun(Offset) {
  Drawcircle(c.width / 2, c.height * Offset, 250, c.width / 2, c.height * Offset, 20, 270, "#fcffb500", "#fcffb5")
  Drawcircle(c.width / 2, c.height * Offset, 140, c.width / 2, c.height * Offset, 20, 140, "#fdff8600", "#fdff86")
  Drawcircle(c.width / 2, c.height * Offset, 120, c.width / 2, c.height * Offset, 20, 120, "#ffff7000", "#ffff70")
  Drawcircle(c.width / 2, c.height * Offset, 100, c.width / 2, c.height * Offset, 20, 100, "#ffee5000", "#ffee50")
  Drawcircle(c.width / 2, c.height * Offset, 80, c.width / 2, c.height * Offset, 20, 80, "#FDB81300", "#FDB813")
}

DrawSun(0.5)

function drawMountain(baseHeight, peakHeight, color) {
  dot.beginPath();
  let x = 0;
  let y = baseHeight;

  dot.moveTo(x, y);

  while (x < c.width) {
    const peak = Math.random() * peakHeight;
    y = baseHeight - peak;

    x += Math.random() * 100 + 50;
    dot.lineTo(x, y);
  }

  dot.lineTo(c.width, c.height);
  dot.lineTo(0, c.height);
  dot.closePath();

  dot.fillStyle = color;
  dot.fill();
}
function drawGreenery(baseHeight, peakHeight) {
  dot.beginPath();
  let x = 0;
  let y = baseHeight;

  dot.moveTo(x, y);

  while (x < c.width) {
    const peak = Math.random() * peakHeight;
    y = baseHeight - peak * 0.3;
    x += Math.random() * 100 + 50;
    dot.lineTo(x, y);
  }

  dot.lineTo(c.width, c.height);
  dot.lineTo(0, c.height);
  dot.closePath();

  dot.fillStyle = "#228B22";
  dot.fill();
}

drawMountain(c.height - 75, 350, "#4B4B4B"); // Farthest, darkest mountains
drawMountain(c.height - 100, 200, "#5D5D5D");
drawMountain(c.height - 125, 125, "#707070");
drawMountain(c.height - 150, 75, "#8B7D7B"); // Mid-range mountains
drawMountain(c.height - 100, 50, "#A9A9A9"); // Foreground mountains

drawGreenery(c.height - 50, 100);