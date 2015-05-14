var Gravity = {};

Gravity.boot = function(game) {};

Gravity.boot.prototype = {
	preload: function() {
		this.load.image('screen','./res/gravityStartScreen.png');
		this.load.image('newGame','./res/newGame.png');
		this.load.image('player','./res/kevin.png');
		this.load.image('goal','./res/diamond.png');
		this.load.image('block','./res/borderBlock.png');
		this.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/Gray.js');
	},
	create: function() {
		this.state.start('manemenu');
	}
};