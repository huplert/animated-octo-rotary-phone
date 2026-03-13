const Tile={
GRASS:0,
PATH:1,
TREE:2
}

function makeTown(){

const w=32
const h=32

const bg=[]
const collision=[]

for(let y=0;y<h;y++){

bg[y]=[]
collision[y]=[]

for(let x=0;x<w;x++){

if(x===0||y===0||x===w-1||y===h-1){

bg[y][x]=Tile.TREE
collision[y][x]=1

}else{

bg[y][x]=Tile.GRASS
collision[y][x]=0

}

}
}

return{
id:"town",
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

const maps={
starter_town:makeTown()
}