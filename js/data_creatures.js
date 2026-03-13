function makeCreature(i){

const rng=mulberry32(1000+i)

return{
id:`mon_${String(i).padStart(3,"0")}`,
name:`MON${i}`,
type:["Leaf","Flame","Wave","Spark","Mist"][i%5],
archetype:["beast","bird","bug","ghost","plant"][i%5],

stats:{
hp:40+Math.floor(rng()*40),
atk:30+Math.floor(rng()*40),
def:30+Math.floor(rng()*40),
spd:30+Math.floor(rng()*40),
spc:30+Math.floor(rng()*40)
}
}
}

const CREATURES=Array.from({length:151},(_,i)=>makeCreature(i+1))

const CREATURE_BY_ID={}
CREATURES.forEach(c=>CREATURE_BY_ID[c.id]=c)