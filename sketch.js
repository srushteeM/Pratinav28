
//		1) mango does not fall after touching stone
//		2) line between boy's hand and stone does not appear
//		3) stone does not detach after pressing space


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint


function preload() {
	treeImg = loadImage("pictures/tree.png");
	boyImg = loadImage("pictures/boy.png");
}

function setup() {
	createCanvas(1000, 700);
	
	engine = Matter.Engine.create();
	world = engine.world;

	tree= new Tree (750,580)

	boy = createSprite(200, 600);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	mango = new MANGO(800, 150);
	mango1 = new MANGO(930, 200);
	mango2 = new MANGO(730, 200);
	mango3 = new MANGO(700, 100);
	mango4 = new MANGO(800, 50);
	mango5 = new MANGO(890, 120);
	mango6 = new MANGO(630, 200);
	stone = new STONE(230, 500);

	lin = new LIN(stone.body, { x: 140, y: 540 });

	Engine.run(engine);
}


function draw() {
	background(200);
	drawSprites();
	Matter.Engine.update(engine);
	tree.display();
	mango.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	stone.display();

	

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);

	
}


function mouseDragged() {
		Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	lin.shoot();
}


// function fall(s, m) {
// 	if (m.body.position.x - s.body.position.x < 50) 
// 		Matter.Body.setStatic(m, false);
// }

function keyPressed() {
	if (keyCode === 32) 
	Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	lin.join(stone.body);
}

function detectCollision (stone, mango){

	var mangoPos= mango.body.position
	var stonePos= stone.body.position
	var distance= dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)
	if(distance<= mango.r+stone.r){
		Matter.Body.setStatic(mango.body, false)
	}
	}
