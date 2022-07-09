var path,dog,cash,diamonds,chocolate,plastic
var pathImg,dogImg,boneImg,chocolateImg,lolImg,plasticImg;
var treasureCollection = 0;
var boneG,chocolateG,lolG,plasticGroup;
var gameOverImg

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  dogImg = loadAnimation("dog3.png");
  boneImg = loadImage("bone.png");
  chocolateImg = loadImage("chocolate.png");
  lolImg = loadImage("lol.png");
  plasticImg = loadImage("plas.png");
  gameOverImg = loadImage("gameOver.png")
  
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
dog = createSprite(70,580,20,20);
dog.addAnimation("SahilRunning",dogImg);
dog.scale=0.7;

gameOver = createSprite(250,100);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.7
  
  
boneG=new Group();
chocolateG=new Group();
lolG=new Group();
plasticGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  dog.x = World.mouseX;
  
  gameOver.visible = false;

  edges= createEdgeSprites();
  dog.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createbone();
    createchocolate();
    createlol();
    createplastic();

    if (boneG.isTouching(dog)) {
      boneG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (chocolateG.isTouching(dog)) {
      chocolateG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(lolG.isTouching(dog)) {
      lolG.destroyEach();

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(plasticGroup.isTouching(dog)) {
        gameState=END;
        
       
        // cashG.destroyEach;
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        
         boneG.destroyEach();
         chocolateG.destroyEach();
        lolG.destroyEach();
         plasticGroup.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        boneG.setVelocityYEach(0);
        chocolateG.setVelocityYEach(0);
        lolG.setVelocityYEach(0);
        plasticGroup.setVelocityYEach(0);
        
      gameOver.visible = true;
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createbone() {
  if (World.frameCount % 200 == 0) {
  var bone = createSprite(Math.round(random(50, 350),40, 10, 10));
  bone.addImage(boneImg);
  bone.scale=0.10;
  bone.velocityY = 3;
  bone.lifetime = 150;
  boneG.add(bone);
  }
}

function createchocolate() {
  if (World.frameCount % 320 == 0) {
  var chocolate = createSprite(Math.round(random(50, 350),40, 10, 10));
  chocolate.addImage(chocolateImg);
  chocolate.scale=0.5;
  chocolate.velocityY = 3;
  chocolate.lifetime = 150;
  chocolateG.add(chocolate);
}
}

function createlol() {
  if (World.frameCount % 410 == 0) {
  var lol = createSprite(Math.round(random(50, 350),40, 10, 10));
  lol.addImage(lolImg);
  lol.scale=0.4;
lol.velocityY = 3;
lol.lifetime = 150;
  lolG.add(lol);
  }
}

function createplastic(){
  if (World.frameCount % 530 == 0) {
  var plastic = createSprite(Math.round(random(50, 350),40, 10, 10));
plastic.addImage(plasticImg);
  plastic.scale=0.6;
plastic.velocityY = 3;
 plastic.lifetime = 150;
  plasticGroup.add(plastic);
  }
}
