const keys={}
const justPressed={}

window.addEventListener("keydown",e=>{
if(!keys[e.key]) justPressed[e.key]=true
keys[e.key]=true
})

window.addEventListener("keyup",e=>{
keys[e.key]=false
})

function consumePress(k){
if(justPressed[k]){
justPressed[k]=false
return true
}
return false
}