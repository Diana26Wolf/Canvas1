mouse_event="empty"
var last_x, last_y;
var canvas= document.getElementById("Canvas");
ctx= canvas.getContext("2d")
pen_c= "white"
pen_w= 6
canvas.addEventListener("mousedown", mymouse_down);
function mymouse_down(e)
{
    console.log("draw_check")
    pen_c= document.getElementById("I1").value
    pen_w= document.getElementById("I2").value
    mouse_event="mouseDown"
    
}
canvas.addEventListener("mousemove", mymouse_move);
function mymouse_move(e){
    currentX= e.clientX - canvas.offsetLeft;
    currentY= e.clientY - canvas.offsetTop;
if(mouse_event== "mouseDown")
canvas = document.getElementById("Canvas")
ctx = canvas.getContext("2d")
color = document.getElementById("I2").value

ctx.beginPath()
ctx.strokeStyle = pen_c
ctx.lineWidth = 10
ctx.arc(currentX, currentY, 70, 0, 360)
ctx.stroke()
ctx.moveTo(last_x, last_y) 
ctx.lineTo(currentX, currentY)
last_x=currentX;
last_y=currentY;
}
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
    line(current, currentY)
}
function circle(mouse_x, mouse_y){
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 5
    ctx.arc(mouse_x, mouse_y, 70, 0, 360)
    ctx.stroke()
}
function line(currentX, currentY){
    ctx.beginPath()
    ctx.strokeStyle = pen_c
    ctx.lineWidth = 10
    ctx.arc(currentX, currentY, 70, 0, 360)
    ctx.stroke()
    ctx.moveTo(last_x, last_y) 
    ctx.lineTo(currentX, currentY)
    last_x=currentX;
    last_y=currentY;
}