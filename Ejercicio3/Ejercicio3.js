let angle = 0;
let lineLength = 100;
let centerX, centerY;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  background(255); 
}

function draw() {
  noFill();
  stroke(random(255), random(255), random(255), 10); 
  strokeWeight(5);
  translate(centerX, centerY); 
  rotate(radians(angle)); 
  line(0, 0, lineLength, 0); 
  angle += 1; 
}
