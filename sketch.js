var ryuk, basket;
var bgrealm;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
    bgrealm = loadImage("realm.jpg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1000, 1000);
    ryuk = new Shinigami(500, 500);
    basket = new Basket(520, 520);
}

function draw(){
    background(bgrealm);
    Engine.update(engine);

    ryuk.display();
    basket.display();
    //console.log("sfndjhngj");
}