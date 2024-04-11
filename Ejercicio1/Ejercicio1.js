let r =0;
let g= 0;
let b = 255;
let inicio=0;
let finale=200;

function setup() {
  createCanvas(850,650);
}

function draw() {
  background(230,100,47);
  noStroke();
  inicio=inicio+1;
  rect(300,330,200,50);
  fill(r,g,b)

  if (finale<inicio){
    inicio = 0;
    cambio()
  }
}

function cambio(){
  if(b>r){
    r= 255;
    b=0;
  }else{
    g=255;
    r=0;
  }
  if(g>b){
    b=120;
    r=22;
    g=0;
  }
}