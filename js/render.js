function drawTile(tile, x, y) {

switch(tile){

case Tile.GRASS:
ctx.fillStyle = COLORS.c3
break

case Tile.PATH:
ctx.fillStyle = COLORS.c2
break

case Tile.TREE:
ctx.fillStyle = COLORS.c1
break

case Tile.TALL_GRASS:
ctx.fillStyle = COLORS.c2
break

default:
ctx.fillStyle = COLORS.c3

}

ctx.fillRect(x, y, TILE, TILE)

}

function drawMap(map){

for(let y=0; y<map.height; y++){
for(let x=0; x<map.width; x++){

drawTile(map.bg[y][x], x*TILE, y*TILE)

}
}

}

function drawPlayer(player){

ctx.fillStyle = COLORS.c0
ctx.fillRect(player.x, player.y, PLAYER_SIZE, PLAYER_SIZE)

}

function render(state){

ctx.fillStyle = COLORS.c3
ctx.fillRect(0,0,SCREEN_W,SCREEN_H)

drawMap(state.map)

drawPlayer(state.player)

ctx.font = "bold 8px monospace"
drawText(state.map.name,4,4)

}
