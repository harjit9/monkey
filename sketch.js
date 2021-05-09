
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(50,200,20,50);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,300,400,20);

  ground.x = ground.width /2;
  ground.velocityX =-6


  
  
  obstaclesGroup = new Group();
  
  

  
}


function draw() {
 background(255);
  monkey.collide(ground)

    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground)
    
    spawnObstacles();
  
if(obstaclesGroup.isTouching(monkey)){
monkey.velocityX=0;
ground.velocityX = 0;
obstaclesGroup.setVelocityXEach(0);
    

obstaclesGroup.setLifetimeEach(-1);
}

drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    
    obstacle.velocityX = -6
    
    
    var rand = Math.round(random(1,6));
    
          
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
  
    obstaclesGroup.add(obstacle);
  }
}














