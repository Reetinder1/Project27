
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(245,600,60);
	bob2 = new Bob(304,600,60);
	bob3 = new Bob(365,600,60);
	bob4 = new Bob(426,600,60);
	bob5  = new Bob(487,600,60);
	ground =new Ground(width/2.5, 50, 300, 30, {isStatic:true} );
	 World.add(world, ground);
	 rope1 = new Rope(bob.body,ground.body,-35*2,320);
     rope2 = new Rope(bob2.body,ground.body,-5*2,320);
	 rope3 = new Rope(bob3.body,ground.body,25*2,320);
	 rope4 = new Rope(bob4.body,ground.body,55*2,320);
	 rope5 = new Rope(bob5.body,ground.body,85*2,320);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();

  rope1.display();
  bob.display();

  rope2.display();
  bob2.display();

  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();

  
  drawSprites();
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45});
	}
}

