
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
                x: (fromShape.x - toShape.x) / distance,
                y: (fromShape.y - toShape.y) / distance,
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
            for (var x = fromVector.x; x <= toVector.x; x++)
            {
                for (var y = fromVector.y; y <= toVector.y; y++)
                {
                    if (shape.hitTest(x, y))
                        return true;
                }
            }

            return false;
        }
    };

} (window));