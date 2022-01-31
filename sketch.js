var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("Laser_Cannon.png");
  appleImg = loadImage("Space_Invader3.png");
  orangeImg = loadImage("Space_Invader2.png");
  redImg = loadImage("Space_Invader.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
//garden.addImage(gardenImg);
garden.visible = false


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.11;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(200);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

 var select_sprites = Math.round(random(1,3));

  
   /*if (frameCount % 50 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   } */

  /* if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
      createOrange();
    }
   } */

  /* if (frameCount / 80 == 0) {
    if (select_sprites == 1) {
      createApples();
   } else if (select_sprites == 2) {
       createOrange();
    }else {
      createRed();
     }
   }  */

 if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   } 



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.09;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.035;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.04;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
