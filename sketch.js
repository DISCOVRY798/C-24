
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  // ground = new Ground(600,height,1200,20)
	//paperpos=new Paper(235,420,30) 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // ground.display();
  paperpos.display();
 
}



