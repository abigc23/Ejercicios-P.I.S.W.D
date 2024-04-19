let angle = 0;
let lineLength = 50;
let centerX, centerY;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(2);
  translate(centerX, centerY); 
  rotate(radians(angle)); 
  line(0, 0, lineLength, 0); 
  angle += 1; 
}
