var Gravity = {};

var goals, player, blocks, cursors, gray, complete, moves, level;
var x, y, count, inc, ax, ay, blocks, brick, goals;
var resetButton,levelNum,levelText,completeMenu,gameMenu,pauseBtn,pauseMenu;
var retry, main, next, newGame, cont,gameOver;

Gravity.boot = function(game) {};

Gravity.boot.prototype = {
	preload: function() {
		this.load.spritesheet('player','./res/guy.png',30,30);
		this.load.image('ende','./res/theEnd.png');
		this.load.image('gameOver','./res/gameOver.png');
		this.load.image('pauseText','./res/pausedText.png');
		this.load.image('gameMenuBack','./res/gameMenuBack.png');
		this.load.image('pauseBtn','./res/pauseButton.png');
		this.load.image('cont','./res/continue.png');
		this.load.image('baque','./res/menuBack.png');
		this.load.image('levComp','./res/levelComplete.png');
		this.load.image('nextLev','./res/nextLevel.png');
		this.load.image('retry','./res/retry.png');
		this.load.image('main','./res/mainMenu.png');
		this.load.image('level','./res/level.png');
		this.load.image('restart','./res/restart.png');
		this.load.image('screen','./res/gravityStartScreen.png');
		this.load.image('newGame','./res/newGame.png');
		this.load.image('goal','./res/diamond.png');
		this.load.image('block','./res/asteroid.png');
		this.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/Gray.js');
	},
	create: function() {
		this.state.start('manemenu');
	}
};