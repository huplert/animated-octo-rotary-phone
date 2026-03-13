const state={
map:maps.starter_town,
player:{
x:16*TILE,
y:20*TILE
}
}

function update(){

if(keys.i) state.player.y-=1
if(keys.k) state.player.y+=1
if(keys.j) state.player.x-=1
if(keys.l) state.player.x+=1

}

function render(){

ctx.fillStyle=COLORS.c3
ctx.fillRect(0,0,SCREEN_W,SCREEN_H)

drawMap(state.map)

ctx.fillStyle=COLORS.c0
ctx.fillRect(state.player.x,state.player.y,8,8)

}

function gameLoop(){

update()
render()

requestAnimationFrame(gameLoop)

}

gameLoop()