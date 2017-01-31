var canvas = document.getElementById('sky'), ctx = canvas.getContext('2d'), 
    canvasContainer = document.getElementById('special'), x = 50, y = 75,
    radius = 0, objCoords = [], percX = 0, percY = 0;

canvas.width = canvasContainer.offsetWidth;
canvas.height = canvasContainer.offsetHeight;
radius = canvas.height / 80;

ctx.fillStyle = "rgba(34,45,23,0.4)";
//arc is (centerX,centerY,radius,startangle,EndAngle)
//ctx.moveTo(100,200); this is to move the paint cursor
for(var n = 0;n<=60;n++){
    var newCoords = {
        x: getRandomInt(1, canvas.width),
        y: getRandomInt(1, canvas.height)
    };
    objCoords.push(newCoords);
}

console.log('W: ' + canvas.width + ' H: ' + canvas.height);
//console.log('Random: ', objCoords);
function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}
function draw(){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(226,222,242,0.4)';
    objCoords.forEach(function(tmpItem, n) {
        ctx.moveTo(tmpItem.x,tmpItem.y);
        ctx.arc((tmpItem.x + percX),(tmpItem.y + percY),radius,0,2*Math.PI);
        ctx.fill();
    }, this);

    ctx.fillStyle = 'rgba(23,48,89,0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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