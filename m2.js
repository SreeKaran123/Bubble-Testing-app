const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Initialize circle and arrow positions
let circleX = 100;
let circleY = canvas.height / 2;
let circleRadius = 50;
let circleColor = getRandomColor();

let arrowX = canvas.width - circleX;
let arrowY = circleY;
let arrowWidth = 20;
let arrowHeight = 20;

let arrowSpeed = 5;
let isArrowMoving = false;

// Draw initial circle and arrow
drawCircle();
drawArrow();

// Add event listeners for hit and reset buttons
const hitBtn = document.getElementById("hitBtn");
hitBtn.addEventListener("click", hitCircle);

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reset);

// Helper function to draw circle
function drawCircle() {
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = circleColor;
  ctx.fill();
}

// Helper function to draw arrow
function drawArrow() {
  ctx.beginPath();
  ctx.moveTo(arrowX, arrowY);
  ctx.lineTo(arrowX - arrowWidth, arrowY - arrowHeight / 2);
  ctx.lineTo(arrowX - arrowWidth, arrowY + arrowHeight / 2);
  ctx.closePath();
  ctx.fillStyle = "#000";
  ctx.fill();
}

// Helper function to update arrow position
function updateArrowPosition() {
  arrowX -= arrowSpeed;
  if (arrowX < circleX + circleRadius) {
    arrowX = circleX + circleRadius;
    isArrowMoving = false;
    circleColor = "#00FF00"; // Change circle color on hit
    drawCircle();
  }
  drawArrow();
}

// Helper function to start arrow movement
function hitCircle() {
  if (!isArrowMoving) {
    isArrowMoving = true;
    const intervalId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateArrowPosition();
      drawCircle();
      if (!isArrowMoving) {
        clearInterval(intervalId);
      }
    }, 10);
  }
}

// Helper function to reset the application
function reset() {
  circleX = 100;
  circleY = canvas.height / 2;
  circleRadius = 50;
  circleColor = getRandomColor();

  arrowX = canvas.width - circleX;
  arrowY = circleY;

  isArrowMoving = false;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  drawArrow();
}

// Helper function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
