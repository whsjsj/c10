
var trex ,trex_running;
function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,90,20,20)
  trex.addAnimation("t",trex_running)
  //ground = cre


}

function draw(){
  background("white")
  drawSprites()

}
