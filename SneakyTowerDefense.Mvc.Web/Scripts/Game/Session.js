
(function (window, undefined)
{
    function Session(player, map, waves)
    {
        this.player = player;
        this.map = map;
        this.waves = waves;

        this.moveToNextWave();
    }

    Session.prototype = {

        currentWave: null,

        waves: [],

        towers: [],

        reportTargetAttack: function ()
        {
            this.player.health--;

            if (this.player.health <= 0)
            {
                //Game over man, game over

                //TODO: Handle end of game

                this.onPlayerDeath();
            }
        },

        update: function ()
        {
            //update all the towers
            for (var i = 0; i < this.towers.length; i++)
            {
                this.towers[i].update();
            }

            //update the wave

            this.currentWave.update();

            if (!this.currentWave.isAlive)
            {
                this.map.removeChild(this.currentWave);

                this.onWaveCompleted(this.currentWave);

                //move on to next wave
                if (!this.moveToNextWave())
                {
                    //VICTORY!!!
                    this.onGameCompleted();
                }

                //TODO: Other wave complete type stuff
            }

        },

        addTower: function (tower)
        {
            this.towers.push(tower);
            this.map.addChild(tower);
        },

        moveToNextWave: function ()
        {
            if (this.waves.length > 0)
            {
                this.currentWave = this.waves.splice(0, 1)[0];

                this.currentWave.setSession(this);

                this.map.addChild(this.currentWave);

                return true;
            }

            return false;
        },

        onWaveCompleted: function (wave) { },

        onPlayerDeath: function () { },

        onGameCompleted: function () { }

    }

    window.game = window.game || {};
    window.game.Session = Session;

} (window));