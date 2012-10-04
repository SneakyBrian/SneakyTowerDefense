
(function (window, undefined)
{
    function Cannon(session, data, ammo)
    {
        this.session = session;
        this.data = data;
        this.ammo = ammo;

        this.ammo.setWeapon(this);

        this.maxRange = data.maxRange;

        //draw ourselves (red triangle)

        this.graphics.beginFill(createjs.Graphics.getRGB(255, 0, 0));
        this.graphics.drawPolyStar(0, 0, 10, 3, 0, -90);

        //draw our range

        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
        this.graphics.beginFill(createjs.Graphics.getRGB(64, 64, 64, 0.2));
        this.graphics.drawCircle(0, 0, data.maxRange);

        console.log("cannon constructed");
    }

    Cannon.prototype = new game.Weapons.Weapon();

    Cannon.prototype.currentReloadTime = 0;

    Cannon.prototype.baseUpdate = Cannon.prototype.update;

    Cannon.prototype.update = function ()
    {
        if (this.cacheCanvas !== null)
            this.cache(0 - this.maxRange, 0 - this.maxRange, this.maxRange, this.maxRange);

        if (this.currentReloadTime > 0)
            this.currentReloadTime--;

        this.baseUpdate();
    }

    Cannon.prototype.canFire = function ()
    {
        //if we have reloaded, and we don't already have a bullet in the air
        return this.currentReloadTime <= 0 && !this.ammo.isAlive;
    }

    Cannon.prototype.canTarget = function (enemy)
    {
        //cannon can target air and ground!
        return true;
    }

    Cannon.prototype.isInRange = function (distanceToTarget) { return distanceToTarget <= this.maxRange; }

    //ensure that we have set up namespace
    window.game = window.game || {};
    window.game.Weapons = window.game.Weapons || {};

    //add weapon to namespace
    window.game.Weapons.Cannon = Cannon;

} (window));