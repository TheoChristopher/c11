

 function preload() {
   
  shipImg=loadAnimation("ship1-png", "ship2-png") 
  seaImage=loadImage("sea.png") 
 }
 function setup() {
   createCanvas(600,400);
 sea=createSprite(10,200,600,10);
 sea.x=sea.width/2
 sea.velocityX=-2;
ship=createSprite(70,180,20,20)
   ship.addAnimation("ship1-png","ship2-png")
   ship.scale=0.2
 }
 function draw() {
   
   background(seaImage)
   if (keyDown("space")) {
   ship.velocityY = -10;
 }
 
 ship.velocityY = ship.velocityY + 0.8
 
 if (sea.x < 0) {
   sea.x = sea.width / 2;
 }
 
 ship.collide(sea);
 drawSprites()
}