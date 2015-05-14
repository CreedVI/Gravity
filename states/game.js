Gravity.app = function(game){};

var goals,player,blocks,cursors,gray,complete,moves,level;

Gravity.app.prototype = {
	create: function(){
		level = 2;

		cursors = this.input.keyboard.createCursorKeys();	

		this.physics.startSystem(Phaser.Physics.ARCADE);
	
		gray = this.add.filter('Gray');
	
		worldType1(level);
	},
	
	update: function(){
		controls();
    	physics();
	},
	
	physics: function(){
		this.physics.arcade.collide(player,blocks);
		this.physics.arcade.overlap(player,goals,levelComplete,null,this);
	},
	
	controls: function(){
		 player.body.velocity.x = 0;
		 player.body.velocity.y = 0;
		 
		if(this.physics.arcade.collide(player, blocks)){
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

	levelComplete: function(player,goals) {
			complete=true;
			player.filters = [gray];
			goals.filters = [gray];
			blocks.filters = [gray];
			this.paused = true;
			if(this.paused&&complete){
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
				this.physics.startSystem(Phaser.Physics.ARCADE);
			
			    goals = this.add.group();
				goals.enableBody = true;
				
				blocks = this.add.group();
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
								player = this.add.sprite(x,y,'player');
			                    this.physics.arcade.enable(player);
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
	}
};

