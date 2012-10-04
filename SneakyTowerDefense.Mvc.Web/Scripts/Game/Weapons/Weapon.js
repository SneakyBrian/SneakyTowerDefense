
(function (window, undefined)
{
    function Weapon() { }

    Weapon.prototype = new createjs.Shape();

    Weapon.prototype.setTower = function (tower)
    {
        this.tower = tower;

        //set our position on the tower
        this.x = this.tower.x;
        this.y = this.tower.y;

        //make sure that we are on the map!
        this.tower.session.map.addChild(this);
        this.tower.session.map.addChild(this.ammo);

        console.log("weapon constructed at " + this.x + "," + this.y)
    }

    Weapon.prototype.ammo = null;

    Weapon.prototype.maxRange = 0;

    Weapon.prototype.canFire = function () { throw new Error("Need to implement!"); }

    //whether this weapon can target this enemy?
    //for instance are we an anti-air weapon and this is a land based enemy?
    Weapon.prototype.canTarget = function (enemy) { throw new Error("Need to implement!"); }

    //is the distance within weapon range
    Weapon.prototype.isInRange = function (distanceToTarget) { throw new Error("Need to implement!"); }

    //update the weapon
    Weapon.prototype.update = function ()
    {
        this.ammo.update();
    }

    Weapon.prototype.targetAndFire = function ()
    {
        var nearest = this.getNearestEnemy(session);

        //if we have an enemy to target
        if (nearest.enemy !== null)
        {
            console.log("weapon has enemy to target");

            //if it is in range
            if (this.isInRange(nearest.distance))
            {
                console.log("enemy is in range of weapon, firing");

                //open fire!
                this.ammo.fireAt(nearest.enemy);
            }

            //TODO: Rotate to face enemy (even if we didn't acually fire!)
        }
        else
        {
            console.log("weapon has no enemy to target");
        }
    }

    Weapon.prototype.getNearestEnemy = function (session)
    {
        var closestEnemy = null;
        var closestDistance = 999999999999999;

        //if the wave is alive and not waiting to spawn
        if (session.currentWave.isAlive && session.currentWave.spawnDelay <= 0)
        {
            var numEnemies = session.currentWave.getNumChildren();
            for (var i = 0; i < numEnemies; i++)
            {
                var enemy = session.currentWave.getChildAt(i);

                if (this.canTarget(enemy))
                {
                    var distance = game.Support.getDistance(this, enemy);

                    if (distance < closestDistance)
                    {
                        closestEnemy = enemy;
                        closestDistance = distance;
                    }
                }
            }
        }

        return { enemy: closestEnemy, distance: closestDistance };
    }

    //ensure that we have set up namespace
    window.game = window.game || {};
    window.game.Weapons = window.game.Weapons || {};

    //add weapon to namespace
    window.game.Weapons.Weapon = Weapon;

} (window));