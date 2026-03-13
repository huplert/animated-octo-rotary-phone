function drawTile(tile,x,y){

switch(tile){

case 0:
ctx.fillStyle=COLORS.c3
break

case 1:
ctx.fillStyle=COLORS.c2
break

case 2:
ctx.fillStyle=COLORS.c1
break

}

ctx.fillRect(x,y,TILE,TILE)

}

function drawMap(map){

for(let y=0;y<map.height;y++){
for(let x=0;x<map.width;x++){

drawTile(map.bg[y][x],x*TILE,y*TILE)

}
}

}