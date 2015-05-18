Gravity.app = function (game) { };

Gravity.app.prototype = {
	create: function () {

		cursors = this.input.keyboard.createCursorKeys();

		this.physics.startSystem(Phaser.Physics.ARCADE);

		gray = this.add.filter('Gray');

		this.worldType1(level);
	},

	update: function () {
		this.controls();
		this.phys();
		this.cheque();
	},

	phys: function () {
		this.physics.arcade.collide(player, blocks);
		this.physics.arcade.overlap(player, goals, this.levelComplete, null, this);
	},

	controls: function () {
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;

		switch(this.paused){
			case true:
					if(this.input.activePointer.isDown && !gameOver && !complete){
						pauseMenu.destroy();
						player.filters = null;
						goals.filters = null;
						blocks.filters = null;
						this.paused = false;
					}
				break;
			
			case false:
				if (this.physics.arcade.collide(player, blocks)) {
					if (cursors.left.isDown) {
						player.body.gravity.x = -9750;
						player.body.gravity.y = 0;
						
						player.animations.play('left');
					}
					else if (cursors.right.isDown) {
						player.body.gravity.x = 9750;
						player.body.gravity.y = 0;
						player.animations.play('right');
					}
					else if (cursors.up.isDown) {
						player.body.gravity.y = -9750;
						player.body.gravity.x = 0;
						player.animations.play('up');
					}
					else if (cursors.down.isDown) {
						player.body.gravity.y = 9750;
						player.body.gravity.x = 0;
						player.animations.play('down');
					}
				}
	
				else {
					player.animations.stop();
				}
				break;
				
			default:
				break;
		}
	},
	
	cheque: function(){
		//TODO
		//Check the player's x and y to see if they are
		//within thw wolrd's boundries.
		//If not give them a game over screen.
		
		if(player.body.x<0||player.body.x>450){
			console.log("out of bounds on the x");
			gameOver = true;
			this.gameOver();
		}
		else if(player.body.y<0||player.body.y>450){
			console.log("out of bounds on the y");
			gameOver = true;
			this.gameOver();
		}
	},

	levelComplete: function (player, goals) {
		complete = true;
		player.filters = [gray];
		goals.filters = [gray];
		blocks.filters = [gray];
		this.paused = true;
		if (this.paused && complete) {
			completeMenu = this.add.group();
			completeMenu.create(140,120,'levComp');
			retry = this.add.button(60,370,'retry',this.retry,this);
			main = this.add.button(150,370,'main',this.mainMenu,this);
			next = this.add.button(285,370,'nextLev',this.nextLevel,this);
			completeMenu.add(retry);
			completeMenu.add(main);
			completeMenu.add(next);
		}
	},
	
	retry: function(){
		complete = false;
		goals.destroy();
		blocks.destroy();
		player.destroy();
		gameMenu.destroy();
		completeMenu.destroy();
		this.paused = false;
		this.state.start('app');
	}, 
	
	mainMenu: function(){
		complete = false;
		goals.destroy();
		blocks.destroy();
		player.destroy();
		gameMenu.destroy();
		completeMenu.destroy();
		this.paused = false;
		this.state.start('manemenu');
	}, 
	
	nextLevel: function(){
		complete = false;
		level++;
		goals.destroy();
		blocks.destroy();
		player.destroy();
		gameMenu.destroy();
		completeMenu.destroy();
		this.paused = false;
		this.state.start('app');
	},
		
	//World generation algorithm 	
	worldType1: function (whatLev) {
		var map;
		y = 0;
		x = 0;
		ax = 0;
		ay = 0;
		count = 0;
		inc = 0;

		switch (whatLev) {
			case 1:
				map = levelOne;
				break;
			case 2:
				map = levelTwo;
				break;
			case 3:
				map = levelThree;
				break;
			case 4:
				map = levelFour;
				break;
			case 5:
				map = levelFive;
				break;
			case 6:
				map = levelSix;
				break;
			case 7:
				var end = true;
				break;
			default:
				console.log("no such level");
				break;
		}

		if (map != null) {
			this.physics.startSystem(Phaser.Physics.ARCADE);

			goals = this.add.group();
			goals.enableBody = true;

			blocks = this.add.group();
			blocks.enableBody = true;
			    
			//Adjust this for the height of the canvas
			for (; count < 15; count++) {
				if (count > 0) {
					inc = inc + 30;
					console.log("inc:" + inc);
					console.log();
				}

				ay = count;
				console.log("ay:" + ay);
				console.log();

				y = y + inc;
				console.log("y:" + y);
				console.log();
			
				//Adjust this for the width of the canvas
				for (; ax < 15; x = x + 30, ax++) {
					switch (map[ay][ax]) {
						case 0:
							console.log("Just another block of fresh air.");
							break;

						case 1:
							brick = blocks.create(x, y, 'block');
							brick.body.immovable = true;
							console.log("block:" + x + "," + y);
							console.log(ay + "," + ax);
							console.log(map[ay][ax]);
							console.log();
							break;

						case 2:
							player = this.add.sprite(x, y, 'player');
							this.physics.arcade.enable(player);
							player.body.bounce.y = 0.0;
							player.body.gravity.y = 66;
							player.body.gravity.x = 0;
							player.body.collideWorldBounds = false;
							
							player.animations.add('up',[1]);
							player.animations.add('left',[2]);
							player.animations.add('right',[3]);
							player.animations.add('down',[0]);							
							
							console.log("me");
							break;

						case 3:
							var goal = goals.create(x, y, 'goal');
							console.log("GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALLLLLLLLLLLLLLLLLLLLLLLL");
							break;

						default:
							console.log("There's an issue in your array; you should look into that.");
							break;
					};
				}

				console.log();
				x = 0;
				y = 0;
				ax = 0;
			}
			gameMenu = this.add.group();
			gameMenu.create(0,450,'gameMenuBack');
			pauseBtn = this.add.button(0, 453, 'pauseBtn', this.pause, this);
			levelText = this.add.image(372,470,'level');
			levelNum = this.add.text(430, 470, level, { fontSize: '32pt', fill: '#FFFFFF' });;
			retry = this.add.button(90,470,'retry',this.restart,this);
			main = this.add.button(210,470,'main',this.quit,this);
			gameMenu.add(pauseBtn);
			gameMenu.add(levelText);
			gameMenu.add(levelNum);
			gameMenu.add(retry);
			gameMenu.add(main);
			this.paused = false;
		}
		else if(end){
			this.state.start('theEnd');
		}
	},
	
	pause: function(){
		this.paused = true;
		pauseMenu = this.add.group();
		player.filters = [gray];
		goals.filters = [gray];
		blocks.filters = [gray];
		pauseMenu.create(145,163,'pauseText');
	},
	
	quit: function(){
		goals.destroy();
		blocks.destroy();
		player.destroy();
		gameMenu.destroy();
		this.state.start('manemenu');
	}, 
	
	restart: function(){
		goals.destroy();
		blocks.destroy();
		player.destroy();
		this.state.start('app');
	},
	
	gameOver: function(){
		this.paused = true;
		goals.filters = [gray];
		blocks.filters = [gray];
		this.add.image(145,163,'gameOver');
	}
};