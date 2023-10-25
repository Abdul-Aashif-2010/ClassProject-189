var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,title;
var playerCount;

// to create a sprite --> createSprite()

// to add an image into the sprite
// step 1 --> load the image inside the preload func using loadImage()
// step 2 --> add the image into the sprite

// Homework --> load all the images for different sprites and create the sprites

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  carImage = loadImage("assets/car.png")
  obstacle1_Image = loadImage("assets/obstacle1.png")
  obstacle2_Image = loadImage("assets/obstacle2.png")
  coin_Image = loadImage("assets/goldCoin.png")
  blast_Image = loadImage("assets/goldCoin.png")
  reset_Image = loadImage("assets/reset.png")
  title_Image = loadImage("assets/title.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight)

  bg = createSprite(windowWidth/2 , windowHeight/2)
  bg.addImage(backgroundImage)

  car = createSprite(windowWidth / 2, windowHeight / 2)
  car.addImage(carImage)


  // blast = createSprite(windowWidth / 2, windowHeight / 2)
  // blast.addImage(blast_Image)

  // reset = createSprite(windowWidth / 2, windowHeight / 2)
  // reset.addImage(reset_Image)

  title = createSprite(windowWidth / 2, 38)
  title.addImage(title_Image)
  title.scale = 0.3

  obstaclesGroup = new Group()

  // to make any sprite smaller we've scale
  car.scale = 0.1

  // blast.scale = 0.x
  // reset.scale = 0.1
}

function draw() {

  background("white");
  title.velocityY = 6

  // showCoins()

  showObstacles()

  drawSprites()

}

function showObstacles() {
  if (frameCount % 60 == 0) {
    obstacle = createSprite(Math.round(random(100, width - 100)), height)

    var n = Math.round(random(1, 2))

    if (n == 1) {
      obstacle.addImage(obstacle1_Image)
    }
    else {
      obstacle.addImage(obstacle2_Image)
    }

    obstacle.scale = 0.1

    // spriteName.velocityY --> will let the sprite move along the y axis
    obstacle.velocityY = -6

    obstaclesGroup.add(obstacle)
  }
}



function showCoins() {
  if (frameCount % 60 == 0) {
    coins = createSprite(Math.round(random(100, windowWidth - 100)), -50)
    coins.addImage(coin_Image)
    coins.scale = 0.1

  }
}



