var canvas = document.getElementById('sky');
var ctx = canvas.getContext('2d');

var canvasContainer = document.getElementById('special');

canvas.width = canvasContainer.offsetWidth;
canvas.height = canvasContainer.offsetHeight;

ctx.fillStyle = "rgba(34,45,23,0.4)";
//arc is (centerX,centerY,radious,startangle,EndAngle)
//ctx.moveTo(100,200); this is to move the paint cursor
var x = 50;
var y = 75;
var radious = canvas.height / 50;
//ctx.stroke();
console.log('W: ' + canvas.width + ' H: ' + canvas.height);
function draw(){
    ctx.beginPath();

    ctx.arc(x,y,radious,0,2*Math.PI);
    ctx.fillStyle = 'rgba(226,222,242,0.4)';
    ctx.fill();

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
    x = mousePos.x - 15, y = mousePos.y - 15;
});
draw();