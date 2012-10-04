
(function (window, undefined)
{
    function Tile(row, column, width, height, buildable)
    {
        this.row = row;
        this.column = column;
        this.width = width;
        this.height = height;
        this.buildable = buildable;

        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
        this.graphics.beginFill(createjs.Graphics.getRGB(0, 255, 0, 0.2));
        this.graphics.rect(0, 0, width, height);

        this.cache(0, 0, width, height);

        this.x = column * width;
        this.y = row * height;

        console.log("tile constructed at " + this.x + "," + this.y);
    }

    Tile.prototype = new createjs.Shape();

    Tile.prototype.getSize = function () { return { w: this.width, h: this.height }; }

    Tile.prototype.getCentre = function () { return { x: this.x + (this.width / 2), y: this.y + (this.height / 2) }; }

    window.game = window.game || {};
    window.game.Map = window.game.Map || {};
    window.game.Map.Tile = Tile;

} (window));