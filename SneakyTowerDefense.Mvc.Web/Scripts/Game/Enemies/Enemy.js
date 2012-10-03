
(function (window, undefined)
{
    function Enemy() { }

    Enemy.prototype = new createjs.Shape();

    Enemy.prototype.isLandBased = false;

    Enemy.prototype.health = 100;
    Enemy.prototype.speed = 5;

    Enemy.prototype.spawnTime = 0;

    Enemy.prototype.session = null;

    Enemy.prototype.update = function () { throw new Error("Need to implement!"); }

    Enemy.prototype.setSession = function (session) { this.session = session; }


    window.game = window.game || {};
    window.game.Enemies = window.game.Enemies || {};

    window.game.Enemies.Enemy = Enemy;

} (window));