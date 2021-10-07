const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world, bodies;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("snow2.jpg");




}

function setup() {
  createCanvas(800,400);
  var background = createSprite(400,200,800,400);
  background.loadImage(backgroundImg);

  var character = createSprite(200,360,50,50);
  character = loadImage("funny-character.jpg");
  character.scale = 0.2;
}

function draw() {
  background("snow2.jpg");  

  drawSprites();
}