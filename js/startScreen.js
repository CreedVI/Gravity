var game = new Phaser.Game(450, 450, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var button,gray;

function preload() {
	game.load.image('screen','./res/gravityStartScreen.png');
	game.load.image('newGame','./res/newGame.png');
}

function create() {
	game.add.image(0,0,'screen');
	button = game.add.button(125, 200, 'newGame', startGame, this);

}

function startGame() {
	console.log("game startu");
}