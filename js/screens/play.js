game.PlayScreen = me.ScreenObject.extend({
	onResetEvent: function() {
		me.levelDirector.loadLevel('robot_level1');
		game.data.score = 0;
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},

	onDestroyEvent: function() {
		me.game.world.removeChild(this.HUD);
	}
});
