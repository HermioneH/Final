class Brick {
  constructor(location, width, height, color) {
    this.location = location;
    this.width = width;
    this.height = height;
    this.color = color;
    this.points = 1
  }
  
  display() {
    fill(this.color);
    rect(this.location.x,this.location.y,this.width,this.height)
  }
}