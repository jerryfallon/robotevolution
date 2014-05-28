var game = {
	data: {
		score: 0
	},

	onload: function() {
		if(!me.video.init('screen', 640, 480, true, 'auto')) {
			alert('Your browser does not support HTML5 canvas, bummer!');
			return;
		}

		this.data = {
			score: 0
		};

		me.sys.gravity = 1;
		me.audio.init('mp3,ogg');
		me.loader.onload = this.loaded.bind(this);
		me.loader.preload(game.resources);
		me.state.change(me.state.LOADING);
	},

	loaded: function() {
		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.PLAY, new game.PlayScreen());

		me.pool.register('player', game.PlayerEntity);
		me.pool.register('GoldCoin', game.CoinEntity);

		me.input.bindKey(me.input.KEY.LEFT, 'left');
		me.input.bindKey(me.input.KEY.RIGHT, 'right');
		me.input.bindKey(me.input.KEY.SPACE, 'jump', true);
		me.input.bindKey(me.input.KEY.Q, 'restart');

		me.state.change(me.state.PLAY);
	}
};
