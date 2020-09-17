const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box
var box2
var ball

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var box_options={
    restitution:2
}
var box2_options ={
    restitution: 2
}
var ball_options ={
    restitution: 0.8
}

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
box=Bodies.rectangle(200,200,20,20,box_options)
box2=Bodies.rectangle(150,200,20,20,box2_options)
ball=Bodies.circle(200,200,10,ball_options)
World.add(world,box)
World.add(world,box2)
World.add(world,ball)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,20,20);
    rect(box2.position.x,box2.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,10,10);
}