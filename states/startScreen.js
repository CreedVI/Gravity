Gravity.startScreen = function(game) {};

Gravity.startScreen.prototype = {
	create: function() {
		this.add.image(0,0,'screen');
		newGame = this.add.button(125, 200, 'newGame', this.startGame, this);
		if(level != null){
			cont = this.add.button(105,265,'cont', this.contGame, this);
		}
	},
	
	startGame: function() {
		level = 1;
		console.log("game startu");
		this.state.start('app');
	},
	
	contGame: function () {
		console.log("game resume");
		this.state.start('app');
	}
};