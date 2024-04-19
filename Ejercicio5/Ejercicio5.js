let x = 200;
let y = 200;
let speed = 5;
let img;

function preload() {
  img = loadImage('remera.png');
}
function setup() {
  createCanvas(700, 600);
}

function draw() {
  background(220);
  image(img, x, y, 300, 500); 
  noStroke();
}
function keyPressed(){
  if(keyCode === 65){
    x-=speed;  
  }else if(keyCode === 68){
    x+=speed;  
  }else if(keyCode === 83){
    y+=speed;  
  }else if(keyCode === 87){
    y-=speed  
  }
}
