(function(){
    var canvas = document.getElementById('sky'), ctx = canvas.getContext('2d'), 
        canvasContainer = document.getElementById('special'), x = 50, y = 75,
        radius = 0, objCoords = [], percX = 0, percY = 0, totalX = 0, totalY = 0,
        gap = 40, mousePos = {}, actionArea = 100, linesLength = 10, tmp = 0;

    canvas.width = canvasContainer.offsetWidth;
    canvas.height = canvasContainer.offsetHeight;
    radius = canvas.height / 80;
    totalX = canvas.width / gap;
    totalY = canvas.height / gap;

    ctx.fillStyle = "rgba(34,45,23,0.4)";
    //arc is (centerX,centerY,radius,startangle,EndAngle)
    //ctx.moveTo(100,200); this is to move the paint cursor
    for(var n = 1;n<totalX;n++){
        for(var nn = 0;nn<totalY;nn++){
            var newCoords = {
                x: n * gap,
                y: nn * gap
            };
            objCoords.push(newCoords);objCoords
        }
    }
    console.log('Length: ', objCoords.length);
    console.log('W: ' + canvas.width + ' H: ' + canvas.height);
    console.log('X: ' + totalX+ ' Y: ' + totalY);
    //console.log('Random: ', objCoords);
    function drawAngle(ctx, x, y, pos){
        if(pos <=5){
            
        }else{
            ctx.moveTo(x, y);
            ctx.lineTo(x + linesLength, y);
        }
    }
    function draw(){
        this.pos = 0;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(130,130,130,1)';
        ctx.strokeStyle = 'rgba(130,130,130,1)';
        objCoords.forEach(function(tmpItem){
            if((tmpItem.x <= mousePos.x + actionArea && tmpItem.x >= mousePos.x - actionArea) && (tmpItem.y <= mousePos.y + actionArea && tmpItem.y >= mousePos.y - actionArea)){
                this.pos++;
                drawAngle(ctx, tmpItem.x, tmpItem.y, this.pos);
            }
            else{
                ctx.moveTo(tmpItem.x, tmpItem.y);
                ctx.lineTo(tmpItem.x, tmpItem.y + linesLength);
            }
            ctx.stroke();
        }.bind(this));

        requestAnimationFrame(draw);
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    canvas.addEventListener('mousemove', function(evt){
        mousePos = getMousePos(canvas, evt);
        //percX = Math.round(((mousePos.x * 100) / canvas.width) * .1);
        //percY = Math.round(((mousePos.y * 100) / canvas.height) * .1);

        //console.log('width: '+ mousePos.x + ', height: ' + mousePos.y);
    });
    draw();
})();