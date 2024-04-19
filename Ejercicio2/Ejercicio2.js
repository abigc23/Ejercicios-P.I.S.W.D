let angle = 0;
let length = 100;

function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}

function draw() {
  background(220);
  translate(width / 2, height / 2); 
  let x = length * cos(angle); 
  let y = length * sin(angle); 
  line(0, 0, x, y); 
  angle += 0.01; 
}
