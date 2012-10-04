
(function (window, undefined)
{
    //constructor
    function Tower(session, data, weapon, tile)
    {
        //session is the current game session. It allows this tower access to the current list of enemies, amongst other things
        this.session = session;

        //data contains information such as tower name, level, cost
        this.data = data;

        //set the towers current level
        this.currentLevel = data.minLevel;

        //weapon contains details for the weapon such as range, damage, reload time
        this.weapon = weapon;

        //record our tile position
        this.tile = tile;

        //draw our basic tower (just a circle really)

        var radius = (this.tile.getSize().w - 1) / 2;

        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
        this.graphics.beginFill(createjs.Graphics.getRGB(255, 0, 255));
        this.graphics.drawCircle(0, 0, radius);

        var centre = this.tile.getCentre();

        this.x = centre.x;
        this.y = centre.y;

        //now we have a position we can connect the weapon to this tower
        this.weapon.setTower(this);

        console.log("tower constructed at " + this.x + "," + this.y);
    }

    //Tower derives from createjs.shape
    Tower.prototype = new createjs.Shape();

    //get the name of the tower
    Tower.prototype.getName = function () { return this.data.name; }

    //get the current level of the tower
    Tower.prototype.getLevel = function () { return this.currentLevel; }

    //get the cost of the tower
    Tower.prototype.getCost = function () { return this.data.cost; }

    //get the next available upgrade
    Tower.prototype.getNextUpgrade = function ()
    {
        var upgradeIndex = this.currentLevel - 1;

        if (this.data.upgrades.length > upgradeIndex)
            return this.data.upgrades[upgradeIndex];

        return null;
    }

    //get the cost of upgrading the tower to the next level
    Tower.prototype.getUpgradeCost = function ()
    {
        var nextUpgrade = this.getNextUpgrade();

        if (nextUpgrade !== null)
            return nextUpgrade.cost;
        else
            return null;
    }

    //update function, called by the game engine every game update cycle
    Tower.prototype.update = function ()
    {
        this.weapon.update();

        if (this.weapon.canFire())
            this.weapon.targetAndFire();
    }


    //ensure that we have set up namespace
    window.game = window.game || {};

    //add tower to namespace
    window.game.Tower = Tower;

} (window));