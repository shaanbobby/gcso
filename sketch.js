var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
  weight=random(55,90);
  speed=random(400,1500);
  car=createSprite(100, 200, 50, 50);
  wall=createSprite(1000,200,50,100);
  car.velocityX=speed;
}

function draw() {
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
    
  } 
  drawSprites();
}