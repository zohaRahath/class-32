const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,800);
  breaker= new Breaker(200,800,50);
  sling= new Sling(breaker.body,{x:200,y:500})
  ground= new Ground(800,500,500,20);
  box1= new Box(800,470,40,20)
  box2= new Box(760,470,40,20)
  box3= new Box(720,470,40,20)
  box4= new Box(680,470,40,20)
  box5= new Box(640,470,40,20)
  box6= new Box(600,470,40,20)
  box7= new Box(840,470,40,20)
  box8= new Box(880,470,40,20)
  box9= new Box(920,470,40,20)
  box10= new Box(960,470,40,20)
  box11= new Box(1000,470,40,20)
  box12= new Box(960,390,40,20)
  box13= new Box(920,390,40,20)
  box14= new Box(880,390,40,20)
  box15= new Box(840,390,40,20)
  box16= new Box(800,390,40,20)
  box17= new Box(760,390,40,20)
  box18= new Box(720,390,40,20)
  box19= new Box(680,390,40,20)
  box20= new Box(640,390,40,20)
  box21= new Box(680,310,40,20)
  box22= new Box(720,310,40,20)
  box23= new Box(760,310,40,20)
  box24= new Box(800,310,40,20)
  box25= new Box(840,310,40,20)
  box26= new Box(880,310,40,20)
  box27= new Box(920,310,40,20)
  box28= new Box(720,310,40,20)
  box29= new Box(760,310,40,20)
  box30= new Box(800,310,40,20)
  box31= new Box(840,310,40,20)
  box32= new Box(880,310,40,20)
  box33= new Box(840,230,40,20)
  box34= new Box(800,230,40,20)
  box35= new Box(760,230,40,20)
  box36= new Box(800,150,40,20)
  
}

function draw() {
  background(0,255,230);  
  Engine.update(engine);
  breaker.display();
  sling.display();
  ground.display();
  //box40.display();
  //box39.display();
  //box37.display();
  //box38.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  drawSprites();
}

function mouseDragged() {
  breaker.body.position.x=mouseX
  breaker.body.position.y=mouseY
}

function mouseReleased() {
  sling.freedom()
}
