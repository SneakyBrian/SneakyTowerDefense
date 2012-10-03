
(function (window, undefined)
{
    function Tank(data)
    {
        this.data = data;

        this.isLandBased = true;

        this.health = data.maxHealth;

        //draw the tank

        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
        this.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 0));
        this.graphics.drawRoundRect(0, 0, 10, 10, 3);
    }

    Tank.prototype = new window.game.Enemies.Enemy();

    Tank.prototype.update = function ()
    {
        //TODO: move towards target

        //TODO: use A* and tile map system to determine route through towers

        throw new Error("Not implemented yet");
    }

    window.game = window.game || {};
    window.game.Enemies = window.game.Enemies || {};

    window.game.Enemies.Tank = Tank;


} (window));