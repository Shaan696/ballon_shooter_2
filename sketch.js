var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var reds, greens, blues, pinks, arrows;
var score=0;
var arrow,red,blue,green,pink;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  reds= new Group();
  blues= new Group();
  pinks= new Group();
  greens= new Group();
  arrows= new Group();

  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
 

  if (gameState === PLAY){

    console.log(PLAY);
     //moving bow
  bow.y = World.mouseY
  
  // release arrow when space key is pressed
 if (keyDown("space")) {
   createArrow();
   

 }
  
 //creating continous enemies
 var select_balloon = Math.round(random(1,4));
 
 if (World.frameCount % 100 == 0) {
   if (select_balloon == 1) {
     redBalloon();
   } else if (select_balloon == 2) {
     greenBalloon();
   } else if (select_balloon == 3) {
     blueBalloon();
   } else {
     pinkBalloon();
   }
 }  


   
 if(arrows.isTouching(reds)){
   reds.destroyEach();
   arrows.destroyEach();
   score = score + 1;
 }
 
 if(arrows.isTouching(greens)){
   greens.destroyEach();
   arrows.destroyEach();
   score = score + 2;
 }

 if(arrows.isTouching(blues)){
   blues.destroyEach();
   arrows.destroyEach();
   score = score + 3;
 }

 if(arrows.isTouching(pinks)){
   pinks.destroyEach();
   arrows.destroyEach();
   score = score + 2;
 }

 if (score === 50){
   gameState = END;
 }
  }

  

  drawSprites();
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrows.add(arrow);
  arrow.setCollider("rectangle", 0, 0, 60, 10);
}

function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  
  reds.add(red);
}

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  
  blues.add(blue);
}

function greenBalloon() {
   green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  
  greens.add(green);
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  
  pinks.add(pink);
}
