var fixedRect,movingRect,ob1,ob2,ob3;

function setup() {
createCanvas(1200,800)
fixedRect = createSprite(600,400,50,80);
movingRect = createSprite(400,200,80,30);
ob1 = createSprite(100,100,50,50);
ob2 = createSprite(200,100,50,50);
ob3 = createSprite(700,100,50,50);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ob2.velocityX = +2;
ob3.velocityX = -2;

}

function draw() {
  background(255,255,255);  
 movingRect.x = mouseX;
 movingRect.y = mouseY;
if (isTouching(ob1,movingRect)) {
movingRect.shapeColor = "blue";
ob1.shapeColor  =  "blue";
}
else{
  movingRect.shapeColor = "red";
  ob1.shapeColor = "red"
}
 
bounceOff(ob2,ob3) ; 

  drawSprites();
}

