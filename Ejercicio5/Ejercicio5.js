let x = 200;
let y = 200;
let speed = 5;
let img;

function preload() {
  img = loadImage('Media\hedwig.jpg');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, x, y, 50, 50); 
  noStroke();
}
function keyPressed(){
  if(key == 'a'){
    x--;  
  }
  if(key == 'd'){
    x++;  
  }
  if(key == 's'){
    y++;  
  }
  if(key == 'w'){
    y--;  
  }
}


