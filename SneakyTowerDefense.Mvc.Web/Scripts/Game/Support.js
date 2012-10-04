
(function (window, undefined)
{
    window.game = window.game || {};

    window.game.Support = window.game.Support ||
    {
        getDistance: function (shape1, shape2)
        {
            return Math.sqrt(Math.pow(Math.abs(shape1.x - shape2.x), 2) + Math.pow(Math.abs(shape1.y - shape2.y), 2));
        },

        getDirection: function (fromShape, toShape)
        {
            var distance = this.getDistance(fromShape, toShape);

            return {
                x: (toShape.x - fromShape.x) / distance,
                y: (toShape.y - fromShape.y) / distance,
                distance: distance
            };
        },

        normalise: function (vector)
        {
            var distance = this.getDistance({ x: 0, y: 0 }, vector);

            return { x: vector.x / distance, y: vector.y / distance };
        },

        intersects: function (shape, fromVector, toVector)
        {
            var direction = this.getDirection(fromVector, toVector);

            for (var i = 0; i <= direction.distance; i++)
            {
                var x = fromVector.x + (direction.x * i);
                var y = fromVector.y + (direction.y * i);

                //direct postion check
                if (Math.round(x) == Math.round(shape.x) &&
                    Math.round(y) == Math.round(shape.y))
                {
                    return true;
                }
                //else if we have a width and height
                else if (shape.width !== undefined &&
                        shape.height !== undefined)
                {
                    //simple rect bounds checking
                    if (x >= shape.x &&
                        x <= shape.x + shape.width &&
                        y >= shape.y &&
                        y <= shape.y + shape.height)
                    {
                        return true;
                    }
                }
                //else use the hit test (not sure this is working right)
                else if (shape.hitTest(x, y))
                    return true;
            }

            return false;
        }
    };

    //make sure we have a console to log to
    window.console = window.console || { log: function () { } }

} (window));