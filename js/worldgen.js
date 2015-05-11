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

var map = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,3,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

function worldType1(){
    y=0;
    x=0;
    ax=0;
    ay=0;
    count=0;
    inc=0;
    
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
                    console.log(ay+","+ax)
                    console.log(map[ay][ax]);
                    console.log();
                    break;
					
				case 2:
					var player = game.add.sprite(x,y,'player');
                    game.physics.arcade.enable(player);
                	player.body.bounce.y=0.0;
                	player.body.gravity.y=9750;
                	player.body.gravity.x=0;
                	player.body.collideWorldBounds=false;
					break;

                case 3:
                    var goal = goals.create(x,y,'diamond');
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

/*function worldType2(){
    y=0;
    x=0;
    ax=0;
    ay=0;
    count=0;
    inc=0;

    game.add.sprite(0,0,'bg');

    //Adjust this for the height of the canvas
    for(;count<12;count++){
        if(count>0){
            inc = inc + 40;
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
        for(;ax<20;x=x+40,ax++){
            switch(map2[ay][ax]){
                case 0:
                    brick = blocks.create(x,y,'block');
                    game.add.sprite(x,y,'block');
                    brick.body.immovable = true;
                    console.log("block:"+x+","+y);
                    console.log(ay+","+ax)
                    console.log(map[ay][ax]);
                    console.log();
                    break;

                case 1:
                    console.log("Just another block of fresh air.");
                    break;

                case 2:
                    var goal = goals.create(x,y,'diamond');
                    game.add.sprite(x,y,'diamond');
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

/*
Created by Calvin Day
Whilst listening to Fallout Boy 
and other assorted artists
Music streamed via Spotify 
With help from StackOverflow.com
Food provided by Mad Duck
...
I think that's all.
*/