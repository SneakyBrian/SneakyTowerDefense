﻿
(function (window, undefined)
{

    function CannonAmmo(data)
    {
        //data about the cannon ammo - how fast it moves, 
        this.data = data;

        this.visible = false;

        //draw our graphics
        this.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 255));
        this.graphics.drawCircle(0, 0, 3);

        

        console.log("CannonAmmo constructed");
    }

    CannonAmmo.prototype = new window.game.Weapons.Ammo.Ammo();

    CannonAmmo.prototype.isAlive = false;

    CannonAmmo.prototype.fireAt = function (enemy)
    {
        this.target = enemy;
        this.isAlive = true;
        this.visible = true;

        this.x = this.weapon.x;
        this.y = this.weapon.y;

        console.log("cannon ammo (" + this.x + "," + this.y + ") fired at enemy (" + enemy.x + "," + enemy.y + ")");
    }

    CannonAmmo.prototype.update = function ()
    {
        if (this.cacheCanvas !== null)
            this.cache(-3, -3, 3, 3);

        if (this.isAlive)
        {
            //which direction do we need to be heading to hit this target
            var direction = window.game.Support.getDirection(this, this.target);

            //calculate where we will be at the end of this update
            var futurePosition =
            {
                x: this.x + (direction.x * this.data.speed),
                y: this.y + (direction.y * this.data.speed)
            };

            //calculate whether we have hit the enemy
            if (window.game.Support.intersects(this.target, this, futurePosition))
            {
                //if we have hit the enemy, do damage
                this.target.health -= this.data.damage;

                //we are now dead
                this.isAlive = false;
                this.visible = false;

                console.log("cannon ammo hit target");
            }

            console.log("cannon ammo moving from " + this.x + "," + this.y + " to " + futurePosition.x + "," + futurePosition.y);

            //move to our correct position
            this.x = futurePosition.x;
            this.y = futurePosition.y;
        }
    }

    window.game = window.game || {};
    window.game.Weapons = window.game.Weapons || {};
    window.game.Weapons.Ammo = window.game.Weapons.Ammo || {};

    window.game.Weapons.Ammo.CannonAmmo = CannonAmmo;

} (window));