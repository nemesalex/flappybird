// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };
var game = new Phaser.Game(700, 400, Phaser.AUTO, 'game', stateActions);
var score = 100;
var player;
var step = 10;
var pipes;


/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/Girl4.png");
    game.load.audio("score","assets/point.ogg");
    game.load.image("pipe","assets/pipe_mint.png");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.stage.setBackgroundColor("#C8F3D9");

/* This code does a staircase

    var i = 20;
    var j = 300;
    for (var count = 1; count<=13; count = count +1) {
        game.add.sprite (i ,j , "pipe");
        i=i+50;
        j=j-25;
    }
*/
/*
 //This does randomly generated pipes
    for(var i = 1; i<=7;i++){ // count columns

        var gap = Math.floor(Math.random()*5)+1;
        for (var j = 0; j<gap; j++) {       // count lines
            game.add.sprite (i*200 ,j*50 , "pipe");
        }
        for (var j = gap+2; j<=8; j++){
            game.add.sprite(i*200,j*50,"pipe");
        }
    }
*/
/*  empty cross

    for(var i = 0; i<=14;i++){ if(i !=4){
        for (var j = 0; j<=8; j++) {
            if(j !=4){
                game.add.sprite (i*50 ,j*50 , "pipe");
            }
        }
        }
    }
*/

    game.add.text(50,350,
        "Welcome to FlapperLand!", //text
        {font:"40px Broadway", //font size and typeface
            fill:"#007A7A"})//text colour );

    var x = 350;
    var y = 200;
    player = game.add.sprite(x,y,"playerImg");
    //game.input.onDown.add(clickHandler);
    game.add.audio("score");
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(player_jump);

    /*game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);*/

    game.physics.startSystem(Phaser.Physics.ARCADE);
    player.anchor.setTo(0.5,0.5);
    game.physics.arcade.enable(player);
    player.checkWorldBounds=true;
    player.body.velocity.y=-50;
    player.body.velocity.x=0;
    player.body.gravity.y=200;
    player.scale.setTo(0.5, 0.5);
    pipes = game.add.group();
    game.time.events.loop(2*Phaser.Timer.SECOND, generate_pipes);


}

function add_pipe_part(x,y,pipe_part)
{
    var pipe = pipes.create(x,y,pipe_part);
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x = -175
}
function generate_pipes() {
    var hole = Math.floor(Math.random() * 5) + 1;
    var i;
        for ( i = 0; i < hole; i++) {
            add_pipe_part(900,i*50,"pipe");
        }
        for ( i = hole + 2; i <= 8; i++) {
            add_pipe_part(900, i * 50, "pipe");
        }

}

function player_jump(){
    player.body.velocity.y=-120;

}
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
game.physics.arcade.overlap(player,pipes, game_over);

}

function game_over(){
    location.reload();
}