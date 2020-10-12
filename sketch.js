var car,wall
var speed,weight
var def = 0
function setup() {
  createCanvas(1600,400);
  car =createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  car.velocityX=speed
  if (car.isTouching(wall))
  {
 def = 0.5 * weight * speed * speed/22500
  }
  if (def<100)
  {
car.shapeColor=("green")
}
if (def>100 && def<180)
{
car.shapeColor=("yellow")
}
if (def>180)
{
car.shapeColor=("red")
}
  background(255,255,255);  
  drawSprites();
}