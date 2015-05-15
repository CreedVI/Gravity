var Gravity = {};

Gravity.boot = function(game) {};

Gravity.boot.prototype = {
	preload: function() {
		this.load.spritesheet('player','./res/guy.png',30,30);
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