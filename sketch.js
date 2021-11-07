var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  LeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup=createGroup()
leafGroup=createGroup()
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX

  spawnApples()
  spawnLeaves()
  if(appleGroup.isTouching(rabbit)){
    appleGroup.destroyEach()
  }
  if(leafGroup.isTouching(rabbit)){
    leafGroup.destroyEach()
  }
  drawSprites();
}
function spawnApples(){
  if(frameCount % 80 ===0){
  apple=createSprite(random(10,390),10,10,15)
  apple.addImage(appleImg)
    apple.scale=0.1
    apple.velocityY=2
    apple.lifetime=200
    appleGroup.add(apple)
  }
}
function spawnLeaves(){
  if(frameCount % 80===0){
    leaf=createSprite(random(10,390),10,10,15)
    leaf.addImage(LeafImg)
    leaf.lifetime=200
    leaf.velocityY=2
    leaf.scale=0.1
    leafGroup.add(leaf)
  }
}