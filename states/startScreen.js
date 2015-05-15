var button;

Gravity.startScreen = function(game) {};

Gravity.startScreen.prototype = {
	create: function() {
		this.add.image(0,0,'screen');
		button = this.add.button(125, 200, 'newGame', this.startGame, this);
	},
	
	startGame: function() {
		console.log("game startu");
		this.state.start('app');
	}
};