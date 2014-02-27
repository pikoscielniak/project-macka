var controller = function() {

    var
        width = 900,
        height = 600,
        radius = 25,
        fill = 'red',
        stroke = 'black',
        strokeWidth=2,
        isRemoving = false;

    var canUtl = new canvasUtils();

    var elemCount = $('#elemCount');

    var stage = new Kinetic.Stage({
        container:'container',
        width: width,
        height:height
    });
    var layer = new Kinetic.Layer();

    stage.add(layer);

    var updateCounter = function() {
        elemCount.text(getCount());
    };

    var addCircle= function() {

        if(isRemoving) {
            isRemoving = false;
            return;
        }

        var mousePos = stage.getPointerPosition();
        var x = mousePos.x;
        var y = mousePos.y;


        if(canUtl.checkCircleCollision(x,y,layer.getChildren(),radius*2)) {
            return;
        }

        if(canUtl.isOutside(x,y,radius,width,height)) {
            return;
        }

        var circle = new Kinetic.Circle({
            x:x,
            y:y,
            fill:fill,
            radius: radius,
            stroke: stroke,
            draggable: true,
            strokeWidth: strokeWidth
        });

        circle.on('dblclick', function(e) {
            if(this) {
                var i = layer.children.indexOf(this);
                layer.children.splice(i,1);
                updateCounter();
                layer.draw();
                isRemoving = true;
            }
        });
        layer.add(circle);
        layer.draw();
        updateCounter();
    };

    var getCount = function() {
        return layer.getChildren().length;
    };

    updateCounter();

    return {
        addCircle: addCircle
    }
}();

$(function() {
    $('#container').click(function() {
        controller.addCircle();
    });
});