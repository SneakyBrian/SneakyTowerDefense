
(function (window, undefined)
{
    function Bomber(data)
    {
        this.data = data;

        this.isLandBased = false;

        this.health = data.maxHealth;
        this.speed = data.speed;

        //draw the bomber

        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
        this.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 0));
        this.graphics.drawPolyStar(0, 0, 10, 3, 0, 0);

        //hide this until we are ready to spawn
        this.visible = false;

        console.log("bomber constructed");
    }

    Bomber.prototype = new window.game.Enemies.Enemy();

    Bomber.prototype.baseUpdate = Bomber.prototype.update;

    Bomber.prototype.update = function ()
    {
        if (this.cacheCanvas !== null)
            this.cache(-10, -10, 10, 10);

        //if we are spawned and still alive
        if (this.spawnTime <= 0 && this.health > 0)
        {
            console.log("bomber update - spawned and healthy");

            this.visible = true;

            //which way to our target
            var direction = window.game.Support.getDirection(this, this.session.map.enemyTargetTile);

            //calculate where we will be at the end of this update
            var futurePosition =
            {
                x: this.x + (direction.x * this.speed),
                y: this.y + (direction.y * this.speed)
            };

            //calculate whether we have hit our target
            if (window.game.Support.intersects(this.session.map.enemyTargetTile, this, futurePosition))
            {
                console.log("bomber hit target!");

                //if we have hit our target, notify the session
                this.session.reportTargetAttack();

                //we are now dead
                this.health = 0;
                this.visible = false;
            }

            console.log("bomber moving from " + this.x + "," + this.y + " to " + futurePosition.x + "," + futurePosition.y);

            //move to our correct position
            this.x = futurePosition.x;
            this.y = futurePosition.y;
        }

        this.baseUpdate();
    }


    window.game = window.game || {};
    window.game.Enemies = window.game.Enemies || {};

    window.game.Enemies.Bomber = Bomber;

} (window));