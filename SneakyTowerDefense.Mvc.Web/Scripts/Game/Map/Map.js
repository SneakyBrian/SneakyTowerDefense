
(function (window, undefined)
{

    function Map(data, stage, rows, columns)
    {
        this.data = data;
        this.stage = stage;

        this.width = stage.canvas.width;
        this.height = stage.canvas.height;

        this.tileWidth = this.width / columns;
        this.tileHeight = this.height / rows;

        for (var i = 0; i < rows; i++)
        {
            var row = [];

            for (var j = 0; j < columns; j++)
            {
                var tile = new window.game.Map.Tile(i, j, this.tileWidth, this.tileHeight);

                this.addChild(tile);

                row.push(tile);
            }

            this.tiles.push(row);
        }

        //cache the enemy start and end tiles

        this.enemyStartTile = this.getTile(data.enemyStart.row, data.enemyStart.column);
        this.enemyTargetTile = this.getTile(data.enemyTarget.row, data.enemyTarget.column);

        //add the map to the stage
        stage.addChild(this);
    }

    Map.prototype = new createjs.Container();

    Map.prototype.tiles = [];

    Map.prototype.getTile = function (row, column)
    {
        //TODO: bounds checking

        return this.tiles[row][column];
    }

    window.game = window.game || {};
    window.game.Map = window.game.Map || {};
    window.game.Map.Map = Map;

} (window));