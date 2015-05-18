Gravity.theEnd = function(game){};

Gravity.theEnd.prototype = {
	create: function(){
		this.add.image(0,0,'ende');
	},
	update: function(){
		if(this.input.activePointer.isDown){
			this.state.start('manemenu');
		}
	}
};