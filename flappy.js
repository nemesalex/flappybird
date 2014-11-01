// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(700, 400, Phaser.AUTO, 'game', stateActions);

var score = 100;

var player;

var step = 10;


/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/Girl3.png");
    game.load.audio("score","assets/point.ogg");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.stage.setBackgroundColor("#C8F3D9");
    game.add.text(50,175,
        "Welcome to Broadway!", //text
        {font:"50px Broadway", //font size and typeface
        fill:"#007A7A"})//text colour );
    var x = 10;
    var y = 270;
    player = game.add.sprite(x,y,"playerImg");
    game.input.onDown.add(clickHandler);
    game.add.audio("score");
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);

    //for (var count = 1)
}

if isDown(Phaser.Keyboard.UP){

function moveLeft(){
    player.x -= step;
}

function moveRight(){
    player.x += step;
}

function moveUp(){
    player.y -= step;
}

function moveDown(){
    player.y += step;
}

function clickHandler(event){

    game.add.sprite(event.x,event.y,"playerImg");
}


function spaceHandler(){
    game.sound.play("score");
    score=score+5;
    alert(score);

}
/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

}