var car,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = "black";
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
   bullet.velocityX = 0;
    var damage = 0.5 * width * speed/22509;
  }
    if(damage>10){
      wall.shapeColor = "green";
    }
    
   //if(damage<260 && deformation>180){
    //  bullet.shapeColor = color(230,230,0);
  //  }
    if(damage<10){                    
      wall.shapeColor = "red";         
    }                                     





  drawSprites();
}