let playerScore = 0;
let paddle;
let ball;
let bricks = [];


function setup() {
  createCanvas(800, 600);
  paddle = new Paddle();
  ball = new Ball(paddle);
  const bricksPerRow = 10;
  const brickWidth = width / bricksPerRow;
  for (let i = 0; i<bricksPerRow; i++){
  brick = new Brick(createVector(brickWidth * i, 0), brickWidth, 25, color(255));
  bricks.push(brick);
  }
}

function draw() {
  background(20);
  textSize(32);
  text(`Score:${playerScore} `,width - 150, 50);
  fill(255);
 
  ball.bounceEdge();
  ball.bouncePaddle();
  ball.update();
  brick.display();
  
  
  if (keyIsDown(LEFT_ARROW)) {
    paddle.move('left');
  } else if (keyIsDown(RIGHT_ARROW)) {
    paddle.move('right')
  }
  
  paddle.display();
  ball.display();
  bricks.forEach(brick =>brick.display());
}

