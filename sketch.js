var car,wall;
var speed,weight;


function setup() {
  createCanvas(1000,400);
  speed = random(55,90);
  weight = random(400,1500);
   car = createSprite(50, 200, 50, 50);
   car.velocityX = speed;
   car.shapeColor = "white";
   wall = createSprite(900,200,50,250);
   wall.shapeColor = "white";

}

function draw() {
  background("black");  

deformation = 0.5 * weight * speed * speed;

if(car.isTouching(wall)){
  if(deformation<100){
    car.shapeColor = "green";
  }
  if(deformation = (100&180)){
   car.shapeColor = "yellow";
  }
  if(deformation>180){
    car.shapeColor = "red";
  }
  car.velocityX = 0;
}
  
  drawSprites();
}