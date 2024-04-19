function setup() {
  createCanvas(400, 200); // Crea un lienzo de 400x200 píxeles
  background(255); // Establece el fondo del lienzo en blanco
  drawLetterR(50, 100); // Dibuja la letra "R" en la posición (50, 100)
  drawLetterG(200, 100); // Dibuja la letra "G" en la posición (200, 100)
}

function drawLetterR(x, y) {
  // Función para dibujar la letra "R"
  // x y y son las coordenadas donde se dibujará la letra "R"
  
  // Dibujar la parte vertical de la letra "R"
  line(x, y - 40, x, y + 40);
  
  // Dibujar la parte curvada de la letra "R"
  aarc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  
}

function drawLetterG(x, y) {
  // Función para dibujar la letra "G"
  // x y y son las coordenadas donde se dibujará la letra "G"
  
  // Dibujar la parte curvada de la letra "G"
  arc(x + 30, y, 80, 80, PI + HALF_PI, TWO_PI);
  
  // Dibujar la parte vertical de la letra "G"
  line(x, y - 40, x, y + 40);
  
  // Dibujar la parte horizontal de la letra "G"
  line(x, y, x + 60, y);
  
  // Dibujar la línea diagonal de la letra "G"
  line(x + 30, y, x + 60, y + 40);
}
