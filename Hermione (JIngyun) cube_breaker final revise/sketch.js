let playerScore = 0;
let paddle;
let ball;
let bricks = [];
let playing


function setup() {
  createCanvas(800, 600);
  playing = true;
  paddle = new Paddle();
  ball = new Ball(paddle);
  const rows = 3;
  const bricksPerRow = 10;
  const brickWidth = width / bricksPerRow;
  for (let row = 0; row < rows; row ++){
  for (let i = 0; i < bricksPerRow; i++){
  brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, color(255));
  bricks.push(brick);
  }
  }
}

function draw() {
  background(20);
 
  ball.bounceEdge();
  ball.bouncePaddle();
  
  if(ball.belowBottom()) {
   textSize(100);   
   playing = false
   fill(255,0,0);
   text('YOU LOSE!!!',width/2-260, height/2)
    noLoop()
  }
    
  ball.update();
  brick.display();
  
  
  if (keyIsDown(LEFT_ARROW)) {
    paddle.move('left');
  } else if (keyIsDown(RIGHT_ARROW)) {
    paddle.move('right')
  }
  
  paddle.display();
  ball.display();
  for (let i = bricks.length - 1; i >= 0; i--) {
    const brick = bricks[i]
    brick.display()
    if(brick.isColliding(ball)) {
      ball.reverse('y')
      bricks.splice(i, 1)
      playerScore += brick.points
    }
  }
 if(bricks.length === 0) {
   textSize(100);   
   playing = false
   fill(255,0,0);
   text('YOU WIN!!!',width/2-230, height/2)
   noLoop()
 }
  textSize(32);
   fill(0,255,0);
  text(`Score:${playerScore} `,width - 150, height - 50)

}

