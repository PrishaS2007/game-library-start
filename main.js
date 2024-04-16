// Canvas Sandbox

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let player1 = {
  x: 175,
  y: 175,
  w: 50,
  h: 50,
  color: "blue",
};

let player2 = {
  x: 200,
  y: 400,
  r: 25,
  color: "green",
};

let block = {
  x: 500,
  y: 125,
  w: 30,
  h: 150,
};

let ball = {
  x: 515,
  y: 400,
  r: 40,
};

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  // Move Player 1
  if (keyPressed["ArrowLeft"]) {
    player1.x += -5;
  } else if (keyPressed["ArrowRight"]) {
    player1.x += 5;
  } else if (keyPressed["ArrowUp"]) {
    player1.y += -5;
  } else if (keyPressed["ArrowDown"]) {
    player1.y += 5;
  }
  player1.x = constrain(player1.x, 0, cnv.width - player1.w);
  player1.y = constrain(player1.y, 0, cnv.height - player1.h);

  // Move Player 1
  if (keyPressed["KeyA"]) {
    player2.x += -5;
  } else if (keyPressed["KeyD"]) {
    player2.x += 5;
  } else if (keyPressed["KeyW"]) {
    player2.y += -5;
  } else if (keyPressed["KeyS"]) {
    player2.y += 5;
  }

  // Check if Mouse is in Block
  if (ptInRect(mouseX, mouseY, ball)) {
    document.body.style.backgroundColor = "lightgrey";
  } else {
    document.body.style.backgroundColor = "white";
  }
  // DRAWING
  drawFrame();

  requestAnimationFrame(draw);
}

function drawFrame() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Player 1 (Blue Rectangle)
  ctx.strokeStyle = player1.color;
  ctx.strokeRect(player1.x, player1.y, player1.w, player1.h);

  // Draw Player 2 (Green Circle)
  ctx.strokeStyle = player2.color;
  ctx.beginPath();
  ctx.arc(player2.x, player2.y, player2.r, 0, 2 * Math.PI);
  ctx.stroke();

  // Draw Block
  ctx.fillStyle = "grey";
  ctx.fillRect(block.x, block.y, block.w, block.h);

  // Draw Ball
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
  ctx.fill();

  // Draw Mouse Coordintes
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`(${mouseX}, ${mouseY})`, mouseX, mouseY);
}
