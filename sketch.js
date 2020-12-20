const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup(){
    createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    roof = new Ground(600,150);
    //ground = new Ground(400,400)
 
    bob1 = new ball(200);
    bob2 = new ball(300);
    bob3 = new ball(400);
    bob4 = new ball(500);
    bob5 = new ball(600);

    rope1 = new rope(bob1.body,roof.body,-60,0);
    rope2 = new rope(bob2.body,roof.body,-30,0);
    rope3 = new rope(bob3.body,roof.body,0,0);
    rope4 = new rope(bob4.body,roof.body,30,0);
    rope5 = new rope(bob5.body,roof.body,60,0);
    Engine.update(engine);
}

function draw(){
    background("pink");
    Engine.update(engine);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    roof.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
       
   //    Matter.Body.setStatic(bob1,false)
	   Matter.Body.applyForce(bob1.body, bob1.body.position, {x:  -50, y: -40})
	   
	 }
   }

