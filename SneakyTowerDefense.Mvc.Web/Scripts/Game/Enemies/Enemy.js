
(function (window, undefined)
{
    function Enemy() { console.log("enemy constructed"); }

    Enemy.prototype = new createjs.Shape();

    Enemy.prototype.isLandBased = false;

    Enemy.prototype.health = 100;
    Enemy.prototype.speed = 5;

    Enemy.prototype.spawnTime = 0;

    Enemy.prototype.session = null;

    Enemy.prototype.update = function ()
    {
        if (this.spawnTime > 0)
        {
            console.log("enemy spawning in " + this.spawnTime);

            this.spawnTime--;

            //if we are now spawning
            if (this.spawnTime == 0)
            {
                this.x = this.session.map.enemyStartTile.x;
                this.y = this.session.map.enemyStartTile.y;

                console.log("enemy spawned at " + this.x + "," + this.y);
            }
        }
    }

    Enemy.prototype.setSession = function (session) { this.session = session; }


    window.game = window.game || {};
    window.game.Enemies = window.game.Enemies || {};

    window.game.Enemies.Enemy = Enemy;

} (window));