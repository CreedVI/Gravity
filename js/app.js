/*
TO DO
~~~~~~
*NEXT LEVEL SCREEN

*MAIN MENU

*LEVEL SELECT

*SPRITE/ART 

*LEVEL DESIGN

*/


var game = new Phaser.Game(450, 450, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var goals,player,blocks,cursors,gray,complete,moves,level;

function preload() {
	game.load.image('player','./res/kevin.png');
	game.load.image('goal','./res/diamond.png');
	game.load.image('block','./res/borderBlock.png');
	game.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/Gray.js');
}

function create() {
	level = 2;

	cursors = game.input.keyboard.createCursorKeys();	

	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	gray = game.add.filter('Gray');
	
	worldType1(level);
	
}

function update() {
	controls();
    physics();
}

function physics() {
	game.physics.arcade.collide(player,blocks);
	game.physics.arcade.overlap(player,goals,levelComplete,null,this);
}

function controls() {
	 player.body.velocity.x = 0;
	 player.body.velocity.y = 0;
	 
	if(game.physics.arcade.collide(player, blocks)){
		 if(cursors.left.isDown){
			player.body.gravity.x = -9750;
			player.body.gravity.y = 0;
		 }
		 else if(cursors.right.isDown){
			player.body.gravity.x = 9750;
			player.body.gravity.y = 0;
		 }
		 else if(cursors.up.isDown){
			player.body.gravity.y = -9750;
			player.body.gravity.x = 0;
		 }
		 else if(cursors.down.isDown){
			player.body.gravity.y = 9750;
			player.body.gravity.x = 0;
		 }
	 }
	 
	 else{
		player.animations.stop();
	}
}

function levelComplete(player,goals) {
	complete=true;
	player.filters = [gray];
	goals.filters = [gray];
	blocks.filters = [gray];
	game.paused = true;
	if(game.paused&&complete){
		//TODO
		//this will call a method to display the level complete screen.
		//from there the level will be increased and the world will be regenerated.
	}
}

var x,y,count,inc,ax,ay,blocks,brick,goals;

/*
BLANK LEVEL TEMPLATE

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

*/

var levelOne = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,3,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

var levelTwo = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,3,1,1],
	[1,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

//World generation algorithm 

function worldType1(whatLev){
	var map;
    y=0;
    x=0;
    ax=0;
    ay=0;
    count=0;
    inc=0;
    
	switch(whatLev){
		case 1:
			map = levelOne;
			break;
		case 2:
			map = levelTwo;
			break;
		default:
			console.log("no such level");
			break;
	}
	
	if(map!=null){
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
	    goals = game.add.group();
		goals.enableBody = true;
		
		blocks = game.add.group();
		blocks.enableBody = true;
	    
	    //Adjust this for the height of the canvas
	    for(;count<15;count++){
	        if(count>0){
	            inc = inc + 30;
	            console.log("inc:"+inc);
	            console.log();
	        }
	
	        ay=count;
	        console.log("ay:"+ay);
	        console.log();
	
	        y = y + inc;
	        console.log("y:"+y);
	        console.log();
	
	        //Adjust this for the width of the canvas
	        for(;ax<15;x=x+30,ax++){
	            switch(map[ay][ax]){
	                case 0:
						console.log("Just another block of fresh air.");
	                    break;
	
	                case 1:
	                    brick = blocks.create(x,y,'block');
	                    brick.body.immovable = true;
	                    console.log("block:"+x+","+y);
	                    console.log(ay+","+ax);
	                    console.log(map[ay][ax]);
	                    console.log();
	                    break;
						
					case 2:
						player = game.add.sprite(x,y,'player');
	                    game.physics.arcade.enable(player);
	                	player.body.bounce.y=0.0;
	                	player.body.gravity.y=9750;
	                	player.body.gravity.x=0;
	                	player.body.collideWorldBounds=false;
						break;
	
	                case 3:
	                    var goal = goals.create(x,y,'goal');
	                    console.log("GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALLLLLLLLLLLLLLLLLLLLLLLL");
	                    break;
	                
	                default:
	                    console.log("There's an issue in your array; you should look into that.");
	                    break;
	            };
	        }
	
	        console.log();
	        x=0;
	        y=0;
	        ax=0;
	    }
	}
	else{
		console.log("nice try");	
	}
}