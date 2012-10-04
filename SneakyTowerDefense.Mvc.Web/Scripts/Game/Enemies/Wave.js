
(function (window, undefined)
{
    function Wave(enemies, spawnInterval, spawnDelay)
    {
        for (var i = 0; i < enemies.length; i++)
        {
            enemies[i].spawnTime = spawnInterval * i;

            this.addChild(enemies[i]);
        }

        this.isAlive = true;

        this.spawnDelay = spawnDelay;

        console.log("wave constructed");
    }

    Wave.prototype = new createjs.Container();

    Wave.prototype.session = null;

    Wave.prototype.update = function ()
    {
        if (this.spawnDelay <= 0)
        {
            //update the enemies
            for (var i = 0; i < this.getNumChildren(); i++)
            {
                var enemy = this.getChildAt(i);

                enemy.update();
            }

            //remove the dead enemies
            for (var i = 0; i < this.getNumChildren(); i++)
            {
                var enemy = this.getChildAt(i);

                if (enemy.health <= 0)
                {
                    this.removeChildAt(i);
                }
            }

            if (this.getNumChildren() === 0)
            {
                this.isAlive = false;

                console.log("wave dead");
            }
        }
        else
        {
            console.log("wave spawning in " + this.spawnDelay);

            this.spawnDelay--;
        }
    }

    Wave.prototype.setSession = function (session)
    {
        this.session = session;

        for (var i = 0; i < this.getNumChildren(); i++)
        {
            var enemy = this.getChildAt(i);

            enemy.setSession(session);
        }
    }

    window.game = window.game || {};
    window.game.Enemies = window.game.Enemies || {};
    window.game.Enemies.Wave = Wave;

} (window));