var canvas;
var music;
var ball,a,b,c,d,edge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    a = createSprite(100,550,200,20); 
    a.shapeColor = "red";
    b = createSprite(300,550,200,20); 
    b.shapeColor = "blue";
    c = createSprite(500,550,200,20); 
    c.shapeColor = "green";
    d = createSprite(700,550,200,20); 
    d.shapeColor = "yellow";


    //create box sprite and give velocity
    ball = createSprite(400,50,20,20); 
    ball.velocityX = -2;
    ball.velocityY = 3;
}

function draw() {
    background(0);
    bounceoff();
    createEdgeSprites();
    if(a.isTouching(ball)){
        ball.shapeColor ="red";
    }
    if(b.isTouching(ball)){
        ball.shapeColor ="blue";
    }
    if(c.isTouching(ball)){
        ball.shapeColor ="green";
    }
    if(d.isTouching(ball)){
        ball.shapeColor ="yellow";
    }
    drawSprites();
}
function bounceoff() {
    ball.bounceOff(a);
    ball.bounceOff(b);
    ball.bounceOff(c);
    ball.bounceOff(d);
    ball.bounceOff(edge);
}