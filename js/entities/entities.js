game.PlayerEntity = me.ObjectEntity.extend({
	init: function(x, y, settings) {
		this.settings = settings;
		this.parent(x, y, settings);
		this.setVelocity(5, 15);
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
	},

	update: function(dt) {
		if(me.input.isKeyPressed('restart')) {
			me.state.change(me.state.PLAY);
		}

		// console.log(this.inViewport);
		if(!this.inViewport) {
			me.state.change(me.state.PLAY);
		}

		if(me.input.isKeyPressed('left')) {
			this.flipX(true);
			this.vel.x -= this.accel.x * me.timer.tick;
		} else if(me.input.isKeyPressed('right')) {
			this.flipX(false);
			this.vel.x += this.accel.x * me.timer.tick;
		} else {
			this.vel.x = 0;
		}

		if(me.input.isKeyPressed('jump')) {
			if(!this.jumping && !this.falling) {
				this.vel.y = -this.maxVel.y * me.timer.tick;
				this.jumping = true;
			}
		}

		this.updateMovement();

    	var res = me.game.world.collide(this);

		if(this.vel.x!=0 || this.vel.y!=0) {
			this.parent(dt);
			return true;
		}
		return false;
	},

	onDestroyEvent: function() {
		console.log('destroyed!');
	}
});

/*----------------
 a Coin entity
------------------------ */
game.CoinEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
        // do something when collected

    	game.data.score += 1;
        // make sure it cannot be collected "again"
        this.collidable = false;
        // remove it
        me.game.world.removeChild(this);
    }
 
});
