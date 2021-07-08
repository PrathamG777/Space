var iss, issImg, spaceShip, spaceShipImg1, spaceShipImg2, spaceShipImg3, spaceShipImg4;
var space; 
var hasDocked = false;

function preload(){
  issImg = loadImage("Docking-undocking/iss.png");
  spaceShipImg1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceShipImg2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceShipImg3 = loadImage("Docking-undocking/spacecraft3.png");
  spaceShipImg4 = loadImage("Docking-undocking/spacecraft4.png");
  space = loadImage("Docking-undocking/spacebg.jpg");

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 130, 50, 50);
  iss.addImage("ISS",issImg);
  iss.scale = 0.7;

  spaceShip = createSprite(300,300,50,50);
  spaceShip.addImage("normal",spaceShipImg1);
  spaceShip.scale = 0.2;
  spaceShip.x = random(100,700);

}

function draw() {
  background(space);  

  if(!hasDocked){
    if(keyDown("LEFT_ARROW")){
      spaceShip.x = spaceShip.x - 5;
      spaceShip.addImage("left",spaceShipImg3);
      spaceShip.changeImage("left",spaceShipImg3);
    }
    if(keyDown("RIGHT_ARROW")){
      spaceShip.x = spaceShip.x + 5;
      spaceShip.addImage("right",spaceShipImg4);
      spaceShip.changeImage("right",spaceShipImg4);
    }
    if(keyDown("DOWN_ARROW")){
      spaceShip.addImage("down",spaceShipImg2);
      spaceShip.changeImage("down",spaceShipImg2);
    }
    if(keyDown("UP_ARROW")){
      spaceShip.y = spaceShip.y - 5;
      spaceShip.changeImage("normal",spaceShipImg1);
    }
  }
  
  iss.setCollider("rectangle",-60,0,30,30);

  if(spaceShip.isTouching(iss)){
    hasDocked = true;
    textSize(30);
    fill("white");
    text("Docking Successful!",300,300);
  }

  drawSprites();
}