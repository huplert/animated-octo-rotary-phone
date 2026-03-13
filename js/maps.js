function makeTown(){

const w = 32
const h = 32

const bg = make2D(w,h,Tile.GRASS)
const collision = make2D(w,h,0)

for(let y=0;y<h;y++){
for(let x=0;x<w;x++){

if(x===0||y===0||x===w-1||y===h-1){
bg[y][x]=Tile.TREE
collision[y][x]=1
}

}
}

for(let x=4;x<28;x++){
bg[16][x]=Tile.PATH
}

for(let y=8;y<24;y++){
bg[y][16]=Tile.PATH
}

return{
id:"starter_town",
name:"Starter Town",
width:w,
height:h,
bg,
collision,
npcs:[],
signs:[],
warps:[],
encounters:null
}

}

window.maps = {
starter_town: makeTown()
}