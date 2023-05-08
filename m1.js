const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw circle on left side of canvas
const circleX = 100;
const circleY = canvas.height / 2;
const circleRadius = 50;
const circleColor = getRandomColor();

ctx.beginPath();
ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
ctx.fillStyle = circleColor;
ctx.fill();

// Draw arrow on right side of canvas
const arrowX = canvas.width - circleX;
const arrowY = circleY;
const arrowWidth = 20;
const arrowHeight = 20;

ctx.beginPath();
ctx.moveTo(arrowX, arrowY);
ctx.lineTo(arrowX - arrowWidth, arrowY - arrowHeight / 2);
ctx.lineTo(arrowX - arrowWidth, arrowY + arrowHeight / 2);
ctx.closePath();
ctx.fillStyle = "#000";
ctx.fill();

// Helper function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
