var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rightSide, leftSide, bottomSide

function preload() {
    helicopterIMG = loadImage("helicopter.png")
    packageIMG = loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);



    packageSprite = createSprite(width / 2, 80, 10, 10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale = 0.2

    helicopterSprite = createSprite(width / 2, 200, 10, 10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale = 0.6

    groundSprite = createSprite(width / 2, height - 35, width, 10);
    groundSprite.shapeColor = color(255)


    engine = Engine.create();
    world = engine.world;

    var options = {
        restitution: 0,
        isStatic: true
    }
    packageBody = Bodies.circle(width / 2, 200, 5, options);
    World.add(world, packageBody);


    //Create a Ground
    ground = Bodies.rectangle(width / 2, height - 35, width, 10, { isStatic: true });
    World.add(world, ground);


    Engine.run(engine);

    leftSide = new Sides(100, 100, 20, 100);
    rightSide = new Sides(300, 100, 20, 100);
    bottomSide = new Sides(200, 100, 200, 20);
}


function draw() {

    background(0);
    packageSprite.x = packageBody.position.x
    packageSprite.y = packageBody.position.y

    rightSide.present();
    leftSide.present();
    bottomSide.present();

    Engine.update(engine);
    drawSprites();

}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        // Look at the hints in the document and understand how to make the package body fall only on
        Matter.Body.setStatic(packageBody, false)

    }
}