var wall, bullet, speed, weight, thickness
var bulletXstart, bulletXend, bulletYstart, bulletYend;
var wallXstart, wallXend, wallYstart, wallYend;

function setup() {
  createCanvas(2000,500);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 50);
   wall = createSprite(1500, 200, thickness, height/2);
   speed = random(100, 200)
   weight = random(30, 52)
   bullet.shapeColor = "white";
   wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black")


  bullet.velocityX=speed;
  if(istouching(wall, bullet)){
    bullet.velocityX = 0;
      var deformation = (0.5 * weight * speed * speed)/(thickness* thickness* thickness)
     if (deformation>3){
      wall.shapeColor=color(255,0,0);
      }
      if (deformation<3){
        wall.shapeColor=color(0,255,0);
     }
  }
  if (bullet.x>2000){
    wall.shapeColor=color(255,0,0);
  }
  drawSprites();
}

function istouching(imput1, imput2){
  wallXstart = imput1.x - imput1.width/2;
  wallXend = imput1.x + imput1.width/2;
  wallYstart = imput1.y - imput1.height/2;
  wallYend = imput1.y + imput1.height/2;

  bulletXstart = imput2.x - imput2.width/2;
  bulletXend = imput2.x + imput2.width/2;
  bulletYstart = imput2.y - imput2.height/2;
  bulletYend = imput2.y + imput2.height/2;
  
  
  if(wallXend>bulletXstart && wallXstart<bulletXend && wallYend>bulletYstart && wallYstart<bulletYend){
    return true;
  }
    else{
      return false;
    }
}