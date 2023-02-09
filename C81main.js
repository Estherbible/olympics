canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");




function circle(mouseX,mouseY){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=5
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke(); 
}
color="blue"
circle(200,300)

color="yellow"
circle(250,340)

color="black"
circle(299,300)

color="red"
circle(400,300)

color="green"
circle(350,340)