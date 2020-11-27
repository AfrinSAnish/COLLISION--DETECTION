var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1200,1200);
  wall=createSprite(1000,600,thickness,height/2);
  bullet=createSprite(200,600,250,5);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  wall.velocityX=0;
}


function draw() {
  background(255,255,255);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/
    (thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}