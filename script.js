const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreLeft = document.getElementById("scoreLeft");
const scoreRight = document.getElementById("scoreRight");

const game = {
  width: canvas.width,
  height: canvas.height,
  paddleWidth: 12,
  paddleHeight: 90,
  ballSize: 12,
  leftScore: 0,
  rightScore: 0,
  paddleSpeed: 7,
  maxBallSpeed: 10
};

const leftPaddle = {
  x: 30,
  y: game.height / 2 - game.paddleHeight / 2,
  width: game.paddleWidth,
  height: game.paddleHeight,
  speed: game.paddleSpeed
};

const rightPaddle = {
  x: game.width - 30 - game.paddleWidth,
  y: game.height / 2 - game.paddleHeight / 2,
  width: game.paddleWidth,
  height: game.paddleHeight,
  speed: 5.2
};

const ball = {
  x: game.width / 2,
  y: game.height / 2,
  radius: game.ballSize / 2,
  vx: 5,
  vy: 3,
  speed: 5
};

const keys = {
  ArrowUp: false,
  ArrowDown: false
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function resetBall(direction) {
  ball.x = game.width / 2;
  ball.y = game.height / 2;
  const angle = (Math.random() - 0.5) * 1.2;
  const speed = ball.speed;
  ball.vx = direction * speed * Math.cos(angle || 0.7);
  ball.vy = speed * Math.sin(angle || 0.7);
}

function updateScore() {
  scoreLeft.textContent = game.leftScore;
  scoreRight.textContent = game.rightScore;
}

function updatePaddles() {
  if (keys.ArrowUp) {
    leftPaddle.y -= leftPaddle.speed;
  }
  if (keys.ArrowDown) {
    leftPaddle.y += leftPaddle.speed;
  }

  leftPaddle.y = clamp(leftPaddle.y, 0, game.height - leftPaddle.height);

  const targetY = ball.y - rightPaddle.height / 2;
  rightPaddle.y += (targetY - rightPaddle.y) * 0.12;
  rightPaddle.y = clamp(rightPaddle.y, 0, game.height - rightPaddle.height);
}

function wallCollision() {
  if (ball.y - ball.radius <= 0) {
    ball.y = ball.radius;
    ball.vy *= -1;
  }

  if (ball.y + ball.radius >= game.height) {
    ball.y = game.height - ball.radius;
    ball.vy *= -1;
  }
}

function paddleCollision() {
  if (
    ball.x - ball.radius <= leftPaddle.x + leftPaddle.width &&
    ball.x + ball.radius >= leftPaddle.x &&
    ball.y >= leftPaddle.y &&
    ball.y <= leftPaddle.y + leftPaddle.height &&
    ball.vx < 0
  ) {
    const relativeIntersectY =
      (ball.y - (leftPaddle.y + leftPaddle.height / 2)) /
      (leftPaddle.height / 2);

    const bounceAngle = relativeIntersectY * 1.2;
    const speed = Math.min(Math.hypot(ball.vx, ball.vy) + 0.5, game.maxBallSpeed);

    ball.vx = Math.abs(Math.cos(bounceAngle)) * speed;
    ball.vy = Math.sin(bounceAngle) * speed;

    ball.x = leftPaddle.x + leftPaddle.width + ball.radius;
  }

  if (
    ball.x + ball.radius >= rightPaddle.x &&
    ball.x - ball.radius <= rightPaddle.x + rightPaddle.width &&
    ball.y >= rightPaddle.y &&
    ball.y <= rightPaddle.y + rightPaddle.height &&
    ball.vx > 0
  ) {
    const relativeIntersectY =
      (ball.y - (rightPaddle.y + rightPaddle.height / 2)) /
      (rightPaddle.height / 2);

    const bounceAngle = relativeIntersectY * 1.2;
    const speed = Math.min(Math.hypot(ball.vx, ball.vy) + 0.5, game.maxBallSpeed);

    ball.vx = -Math.abs(Math.cos(bounceAngle)) * speed;
    ball.vy = Math.sin(bounceAngle) * speed;

    ball.x = rightPaddle.x - ball.radius;
  }
}

function updateBall() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x - ball.radius <= 0) {
    game.rightScore += 1;
    updateScore();
    resetBall(1);
  }

  if (ball.x + ball.radius >= game.width) {
    game.leftScore += 1;
    updateScore();
    resetBall(-1);
  }

  wallCollision();
  paddleCollision();
}

function drawPaddle(paddle) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

function drawCenterLine() {
  ctx.strokeStyle = "rgba(255,255,255,0.6)";
  ctx.setLineDash([12, 12]);
  ctx.beginPath();
  ctx.moveTo(game.width / 2, 0);
  ctx.lineTo(game.width / 2, game.height);
  ctx.stroke();
  ctx.setLineDash([]);
}

function draw() {
  ctx.clearRect(0, 0, game.width, game.height);

  drawCenterLine();
  drawPaddle(leftPaddle);
  drawPaddle(rightPaddle);
  drawBall();
}

function gameLoop() {
  updatePaddles();
  updateBall();
  draw();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    keys[event.key] = true;
    event.preventDefault();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    keys[event.key] = false;
    event.preventDefault();
  }
});

canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseY = event.clientY - rect.top;
  leftPaddle.y = mouseY - leftPaddle.height / 2;
  leftPaddle.y = clamp(leftPaddle.y, 0, game.height - leftPaddle.height);
});

updateScore();
resetBall(1);
requestAnimationFrame(gameLoop);
