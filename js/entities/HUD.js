/**
 * a HUD container and child items
 */
 
game.HUD = game.HUD || {};
 
  
game.HUD.Container = me.ObjectContainer.extend({
 
    init: function() {
        // call the constructor
        this.parent();
         
        // persistent across level change
        this.isPersistent = true;
         
        // non collidable
        this.collidable = false;
         
        // make sure our object is always draw first
        this.z = Infinity;
 
        // give a name
        this.name = "HUD";
         
        // add our child score object at the right-bottom position
        this.addChild(new game.HUD.ScoreItem(630, 440));
    }
});
 
 
/** 
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend( {    
    /** 
     * constructor
     */
    init: function(x, y) {
         
        // call the parent constructor 
        // (size does not matter here)
        this.parent(new me.Vector2d(x, y), 10, 10); 
 
         
        // local copy of the global score
        this.score = -1;
 
        // make sure we use screen coordinates
        this.floating = true;
    },
     
    /**
     * update function
     */
    update : function (dt) {
        // we don't do anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {   
            this.score = game.data.score;
            return true;
        }
        return false;
    },
 
    /**
     * draw the score
     */
    draw : function (context) {
        // draw it baby !
    }
 
});

/** 
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend( {    
    /** 
     * constructor
     */
    init: function(x, y) {
         
        // call the parent constructor 
        // (size does not matter here)
        this.parent(new me.Vector2d(x, y), 10, 10); 
         
        // create a font
        this.font = new me.BitmapFont("robot_font", 32);
        this.font.set("right");
         
        // local copy of the global score
        this.score = -1;
 
        // make sure we use screen coordinates
        this.floating = true;
    },
     
    /**
     * update function
     */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            return true;
        }
        return false;
    },
 
    /**
     * draw the score
     */
    draw : function (context) {
        this.font.draw (context, toBinary(game.data.score), this.pos.x, this.pos.y);
    }
});