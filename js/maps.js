function makeTown(){

const w=32
const h=32

const bg=[]
const collision=[]

for(let y=0;y<h;y++){

bg[y]=[]
collision[y]=[]

for(let x=0;x<w;x++){

bg[y][x]=Tile.GRASS
collision[y][x]=0

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
