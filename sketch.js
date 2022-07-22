var path,car,cash,diamonds,jerrycan,sword;
var pathImg,carImg,cashImg,diamondsImg,jerrycanImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jerrycan,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  carImg = loadAnimation("car.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jerrycanImg = loadImage("jerrycan.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating car running
car = createSprite(70,580,20,20);
car.addAnimation("carRunning",carImg);
//car.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jerrycanG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  car.x = World.mouseX;
  
  edges= createEdgeSprites();
  car.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjerrycan();
    createSword();

    if (cashG.isTouching(car)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(car)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jerrycanG.isTouching(car)) {
      jerrycanG.destroyEach();

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
       treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(car)) {
        gameState=END;
        
        // boy.addAnimation(endImg);
         car.addAnimation("carRunning",endImg);
        // boy.addAnimation("SahilRunning");
        //boy.addAnimation(SahilRunning,endImg);

        car.x=200;
        car.y=300;
        car.scale=0.6;
        
         cashG.destroyEach;
         diamondsG.destroyEach;
         jerrycanG.destroyEach;
         swordGroup.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        
        // cashG.destroyEach();
        // diamondsG.destroyEach();
        //jewelryG.destroyEach();
        // swordGroup.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jerrycanG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createjerrycan() {
  if (World.frameCount % 410 == 0) {
  var jerrycan = createSprite(Math.round(random(50, 350),40, 10, 10));
  jerrycan.addImage(jerrycanImg);
  jerrycan.scale=0.13;
  jerrycan.velocityY = 3;
  jerrycan.lifetime = 150;
  jerrycanG.add(jerrycan);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
