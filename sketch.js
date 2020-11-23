var helicopterIMG, helicopterSprite, packageSprite,packageIMG,package,grIMG;
var packageBody,ground,back;``
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	grIMG = loadImage("f7abd8ab39d92835139687d70b556d58.jpg")
}

function setup() {
	createCanvas(775, 700);
	rectMode(CENTER);
	
back = createSprite(400,300,20,20);
back.addImage("gr",grIMG);
back.scale =1.5
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,10);
	groundSprite.shapeColor=color(255)
groundSprite.visible = false

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown ("DOWN_ARROW")) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false
	});
	World.add(world, packageBody);
	Engine.run(engine);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



