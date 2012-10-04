
(function (window, undefined)
{
    function Ammo() { console.log("Ammo constructed"); }

    Ammo.prototype = new createjs.Shape();

    Ammo.prototype.weapon = null;

    Ammo.prototype.setWeapon = function (weapon) { this.weapon = weapon; }

    Ammo.prototype.fireAt = function (enemy) { throw new Error("Need to implement!"); }
    Ammo.prototype.update = function () { throw new Error("Need to implement!"); }

    window.game = window.game || {};
    window.game.Weapons = window.game.Weapons || {};
    window.game.Weapons.Ammo = window.game.Weapons.Ammo || {};

    window.game.Weapons.Ammo.Ammo = Ammo;

} (window));