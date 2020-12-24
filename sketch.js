var speed, weight
var car, wall
//var deformation2

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,25,25);
  car.shapeColor="white";
  wall = createSprite(1200,200,30,60);
  wall.shapeColor="white";
  speed=random(20,40);
  weight=random(400,1500);
  
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);
if(car.x - wall.x < car.width/2 + wall.width/2
  && wall.x - car.x < wall.width/2 + car.width/2
  && car.y - wall.y < car.width/2 + wall.width/2
  && wall.y - car.y < wall.width/2 + car.width/2
  ){
    car.velocityX = 0;
    var deformation2=0.5 * weight * speed * speed/22509;
    car.shapecolor='pink';
    if(deformation2 > 180 ){
      car.shapeColor(0,255,0);
    }
    if(deformation2 < 80 || deformation2 > 180){
      car.shapecolor(230,230,0);
    }
    if(deformation2 > 180){
      car.shapeColor(255,0,0);
    }

  }
drawSprites();
}

 