var sky;
var bus;
var runner;
var sky1;
var bus1;
var runner1;
var score;
var PLAY = 1;
var ENd = 0;
var gameState = 1;
var image1;
var explotion;
var achievment;
var bounce;
var restart;
var ground;
function preload() {
  sky = loadImage("blue-sky.jpg");
  bus = loadImage("bus.png");
  runner = loadImage("source.gif");
  //bounce = loadSound("Blastwave_FX_BounceTympani_BW.59868.mp3");
  //explotion = loadSound("456.mp3");
  //achievment = loadSound("achievment.mp3");
  restart = loadImage("restart.png");
}
function setup() {
  createCanvas(1100, 700);

  sky1 = createSprite(300, 100, 10, 10);
  sky1.addImage("sky", sky);

  runner1 = createSprite(180, 300, 5, 5);
  runner1.addImage("runner", runner);
  runner1.scale = 1;
  ground = createSprite(400, 700, 1500, 10);
}

function draw() {
  background(sky);
  sky1.velocityX = -4;
  if (sky1.x < 0) {
    sky1.x = sky1.width / 2;
  }
  if (frameCount % 80 === 0) {
    bus1 = createSprite(1100, 600, 5, 5);
    bus1.addImage("bus", bus);
    bus1.scale = 0.4;
    bus1.velocityX = -10;
  }
  //if(keyDown("space")&& runner1.y >= 160) {
  //runner1.bounceoff ;
  //jumpSound.play();

  if (keyDown("space") && runner1.y >= 298.95) {
    runner1.velocityY = -15;
    //bounce.play();
  }
  runner1.velocityY = runner1.velocityY + 0.8;
 

  //gameState=0;
  // explotion.play();
  //textSize(30)
  //text("RESTART", 290,230)
  //image(restart, 300, 250  )
  //if(mousePressedOver(restart)) {
  // reset();
runner1.collide(ground)
  drawSprites();
}
