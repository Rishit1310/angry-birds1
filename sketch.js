const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var myworld,myengine,box,ball
var box1;
var pig1;
var log1;
var bird1;

function setup() {
  createCanvas(1000,600);
  myengine = Engine.create()
  myworld = myengine.world
  //class-22
  /*var options ={
    isStatic:true
  }
  box=Bodies.rectangle(200,350,400,30,options)
  World.add(myworld,box)  

  ball=Bodies.circle(200,200,20,{restitution:2})
  World.add(myworld,ball)
  console.log(box)
  console.log(box.position.x)*/
  box1 = new Box(700,500,70,70)
  box2 = new Box(900,500,70,70)
  box3 = new Box(700,400,70,70)
  box4 = new Box(900,400,70,70)
  box5 = new Box(800,300,70,70)
  ground1 = new ground(500,550,1000,30)
  pig1 = new Pig(800,500)
  pig2 = new Pig(800,400)
  log1 = new log(800,440,300,PI/2)
  log2 = new log(800,360,300,PI/2)
  log3 = new log(720,240,150,PI/4)
  log4 = new log(850,240,150,-PI/4)
  bird1 = new Bird(200,150)
}

function draw() {
  background("black");
  Engine.update(myengine)
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
 //rectMode(CENTER)
  //ellipseMode(RADIUS)
 //ellipse(ball.position.x,ball.position.y,20,20)
 // rect(box.position.x,box.position.y,400,30)  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
 ground1.display()
 pig1.display()
 pig2.display()
 log1.display()
 log2.display()
 log3.display()
 log4.display()
 bird1.display()
}