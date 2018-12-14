class Ball {
  constructor(paddle){
    this.radius = 15;
    this.size = this.radius * 2;
    this.location = createVector(paddle.location.x + (paddle.width / 2), (paddle.location.y - this.radius - 5));
    this.color = (255);
    this.velocity = createVector(5,-5);
    this.paddle = paddle;
  }
  
  bouncePaddle() {
    if (this.location.x + this.radius >= this.paddle.location.x &&
        this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {
          if(this.location.y + this.radius > this.paddle.location.y) {
           this.velocity.y *= -1;
           //this.location.y = this.paddle.location.y - this.radius - 1;
         }
    }
  }
  
  
  bounceEdge(){
    if(this.location.x + this.radius >=width) {
      this.velocity.x *= -1;
    } else if(this.location.x - this.radius <= 0) {
      this.velocity.x *= -1;
    } else if(this.location.y - this.radius <= 0) {
      this.velocity.y *= -1;
    }
  }
  
  display() {
    fill(this.color);
    ellipse(this.location.x, this.location.y,this.size,this.size);
  }
  
  
  update () {
    this.location.add(this.velocity)
  }
  
}