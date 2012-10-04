
(function (window, undefined)
{
    function Cannon(session, data, ammo)
    {
        this.session = session;
        this.data = data;
        this.ammo = ammo;

        this.ammo.setWeapon(this);

        //draw ourselves (red triangle)

        this.graphics.beginFill(createjs.Graphics.getRGB(255, 0, 0));
        this.graphics.drawPolyStar(0, 0, 5, 3, 0, -90);

        console.log("cannon constructed");
    }

    Cannon.prototype = new game.Weapons.Weapon();

    Cannon.prototype.currentReloadTime = 0;

    Cannon.prototype.baseUpdate = Cannon.prototype.update;

    Cannon.prototype.update = function ()
    {
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
        return enemy.isLandBased;
    }

    //ensure that we have set up namespace
    window.game = window.game || {};
    window.game.Weapons = window.game.Weapons || {};

    //add weapon to namespace
    window.game.Weapons.Cannon = Cannon;

} (window));