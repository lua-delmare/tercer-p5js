//Salazar Bocos Luana.
//Inspiradx en una obra de Kazimir Malevich.

function setup()
{
  createCanvas(300, 400); //dimension de la ventana
  background(0, 0, 254, 170); //color del fondo
}

function draw() 
{
  console.log(
    "Para interactuar hace un click sobre la pantalla, luego manten apretada la tecla a o z"
  );

  //fondo
  fill(0, 0, 254); //relleno rectangulo azul
  noStroke(0); //elimino contorno
  rect(0, 260, 800, 30); //rectangulo azul
  fill(200, 180, 0); //relleno rectanguno amarillo
  noStroke(0); //elimino contorno
  rect(0, 290, 800, 20); //rectangulo horizontal amarillo
  fill(0); //color rectangulo negro
  rect(0, 310, 800, 30); //rectangulo negro
  fill(254, 0, 0); //relleno rectangulo rojo
  noStroke(0); //elimino conorno
  rect(0, 340, 800, 84); //rectangulo rojo
  fill(230, 0, 0); //color poste rojo
  stroke(10); //contorno
  rect(40, 201, 30, 60); //posicion
  fill(0); //color negro
  quad(45, 194, 40, 201, 70, 201, 65, 194);

  //cuerpo
  fill(200, 160, 0);
  bezier(97, 400, 120, 120, 200, 120, 130, 400); //brazo izquierdo
  bezier(265, 400, 200, 120, 250, 120, 297, 400); //brazo derecho
  fill(254); //color blanco
  rect(174, 80, 30, 70); //cuello
  fill(200, 160, 0); //color cuerpo amarillo
  bezier(150, 400, 60, 50, 318, 50, 240, 400); //cuerpo persona
  fill(0);
  line(143, 370, 247, 370); //cinturon negro
  fill(254);
  ellipse(190, 55, 60, 90); //cabeza forma
  fill(0);
  bezier(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
  
      push();
      if (frameCount % 100 < 10) {
      stroke("#ffffff");
      fill("#ffffff");
      point(288, 90);
      point(60, 100);
      point(100, 100);
      point(160, 40);
      point(230, 30);
      point(120, 50);
      pop();
    }
    push();
    if (frameCount % 200 < 20)
    {
      fill("#ffffff");
      stroke("#ffffff");
      strokeWeight(5);
      point(288, 90);
      point(60, 100);
      point(100, 20);
      point(160, 40);
      point(230, 30);
      point(120, 50);
      pop();
   }

  if (mouseIsPressed)
  { 
    background(0);
    strokeWeight(3);
    point(179, 45);
    point(201, 46);
    bezier(176, 69, 189, 87, 189, 87, 202, 70);
  }
  if (keyIsPressed) 
  { 
    if (key == "a" || key == "z") strokeWeight(3);
    point(44, 211);
    point(63, 211);
    bezier(45, 227, 50, 255, 50, 255, 61, 230);
  }
}
