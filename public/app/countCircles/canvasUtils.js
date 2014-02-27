function canvasUtils() {

    var isCircleCollision = function (x, y, x1, y1, dist) {
        var rx = x - x1;
        var ry = y - y1;
        return ((rx * rx) + (ry * ry)) <= (dist * dist + 240);
    };

    var checkCircleCollision = function (x, y, children, dist) {
        return _.some(children, function (item) {
            return isCircleCollision(x, y, item.x(), item.y(), dist);
        });
    };

    var isOutside = function (x, y, dist, width, height) {
        var xLeftBound = x - dist;
        var xRightBound = x + dist;

        var yTopBound = y - dist;
        var yBottomBound = y + dist;

        if (xLeftBound <= 0)
            return true;
        if (xRightBound >= width)
            return true;
        if (yTopBound <= 0)
            return true;
        if (yBottomBound >= height)
            return true;

        return false;
    };

    return {
        checkCircleCollision: checkCircleCollision,
        isOutside: isOutside
    }
}