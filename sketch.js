var bullet, wall, thickness;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80);
}

function draw() {
  background(0);
  
  if(hasCollided(bullet, wall)){
    var damage = 0.5 * weight * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor(225, 0, 0);
    }
    if(damage < 10){
      wall.shapeColor(0, 0, 225);
    }
  }
  drawSprites();
}

function hasCollided(bullet1, wall1){
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge > wallLeftEdge){
    return true;
  }
  else{
    return false;
  }

}