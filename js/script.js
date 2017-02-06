var canvas = document.getElementById('sky'), ctx = canvas.getContext('2d'), 
    canvasContainer = document.getElementById('special'), x = 50, y = 75,
    radius = 0, objCoords = [], percX = 0, percY = 0, totalX = 0, totalY = 0,
    gap = 40;

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
        objCoords.push(newCoords);
    }
}
console.log('Length: ', objCoords.length);
console.log('W: ' + canvas.width + ' H: ' + canvas.height);
console.log('X: ' + totalX+ ' Y: ' + totalY);
//console.log('Random: ', objCoords);
function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}
function draw(){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(130,130,130,1)';
    ctx.strokeStyle = 'rgba(130,130,130,1)';
    objCoords.forEach(function(tmpItem){
        ctx.moveTo(tmpItem.x, tmpItem.y);
        ctx.lineTo(tmpItem.x, tmpItem.y + 10);
        ctx.stroke();
    });

    /*var flag = true;
    objCoords.forEach(function(tmpItem, n) {
        ctx.moveTo(tmpItem.x,tmpItem.y);
        if(flag)
            ctx.arc((tmpItem.x + percX),(tmpItem.y + percY),radius,0,2*Math.PI);
        else
            ctx.arc((tmpItem.x - percX),(tmpItem.y - percY),radius,0,2*Math.PI);
        //flag = !flag;
        ctx.fill();
    }, this);*/

    
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
    var mousePos = getMousePos(canvas, evt);
    percX = Math.round(((mousePos.x * 100) / canvas.width) * .1);
    percY = Math.round(((mousePos.y * 100) / canvas.height) * .1);

    //console.log('width: '+ percX + ', height: ' + percY);
});
draw();