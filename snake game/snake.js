var cvs=document.getElementById("canvas");
var cts=cvs.getContext("2d");
var snakew=10,snakeh=10;
function drawSnake(x,y)
{
    
cts.fillStyle="white";
cts.fillRect(x*snakew,y*snakeh,snakew,snakeh);
cts.fillStyle="black";
cts.strokeRect(x*snakew,y*snakeh,snakew,snakeh);
}
//create snake
var len=4;
var snake=[];
for(var i=len-1;i>=0;i--)
{
    snake.push({x:i,y:0})
}
var dir="right";
var food={
    x:Math.round(Math.random()*(cvs.width/snakew-1)+1),
    y:Math.round(Math.random()*(cvs.height/snakeh-1)+1)
}
function createFood(x,y)
{
    cts.fillStyle="red";
cts.fillRect(x*snakew,y*snakeh,snakew,snakeh);
cts.fillStyle="black";
cts.strokeRect(x*snakew,y*snakeh,snakew,snakeh);
}
function dircontrol(e)
{
if(e.keyCode=="37" && dir!="right")
{
    dir="left";
}
else if(e.keyCode=="38" && dir!="down")
{
    dir="up";
}
else if(e.keyCode=="39" && dir!="left")
{
    dir="right";
}
else if(e.keyCode=="40" && dir!="up")
{
dir="down";
}
}
document.addEventListener("keydown",dircontrol);
function draw()
{
    cts.clearRect(1,1,cvs.width,cvs.height);
  for(var i=0;i<snake.length;i++)
  {
    var x=snake[i].x;
    var y=snake[i].y;
    drawSnake(x,y);
  }
  createFood(food.x,food.y);
  //curhead
  var curheadx=snake[0].x;
  var curheady=snake[0].y;
  if(curheadx<0)
  {
      curheadx=cvs.width/snakew;
  }
  else if( curheady<0)
  {
curheady=cvs.height/snakeh;
  }
  else if(curheadx>=cvs.width/snakew)
  {
   curheadx=0;
  }
  else if(curheady>=cvs.height/snakeh)
  {
 curheady=0;
  }
  //new head
  var head={
      x:curheadx,
      y:curheady
  }
  if(dir=="right")
  {
  curheadx++;
  }
  else if(dir=="left")
  {
      curheadx--;
  }
  else if(dir=="up")
  {
      curheady--;
  }
  else if(dir=="down")
  {
      curheady++;
  }
  for(var j=snake.length-1;j>0;j--)
  {
      if(curheadx==snake[j].x && curheady==snake[j].y)
      {
          alert("GAME OVER");
          clearInterval(interval);
      }
  }
  if(food.x==curheadx && food.y==curheady)
  {
     food={
        x:Math.round(Math.random()*(cvs.width/snakew-1)+1),
        y:Math.round(Math.random()*(cvs.height/snakeh-1)+1)
      }
      
  }
  else
  {
  snake.pop();
  }
  snake.unshift({x:curheadx,y:curheady});
}

var interval=setInterval(draw,80);