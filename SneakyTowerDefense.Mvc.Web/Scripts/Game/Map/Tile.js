
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
    }

    Tile.prototype = new createjs.Shape();

    Tile.prototype.getSize = function () { return { w: this.width, h: this.height }; }

    Tile.prototype.getCentre = function () { return { x: this.x, y: this.y }; }

    window.game = window.game || {};
    window.game.Map = window.game.Map || {};
    window.game.Map.Tile = Tile;

} (window));