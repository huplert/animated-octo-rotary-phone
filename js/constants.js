"use strict";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

const SCREEN_W = 160;
const SCREEN_H = 144;

const TILE = 8;

const COLORS={
c0:"#0f380f",
c1:"#306230",
c2:"#8bac0f",
c3:"#9bbc0f",
ui:"#e0f8d0",
border:"#081820"
};

function drawText(text,x,y){
ctx.strokeStyle=COLORS.ui;
ctx.strokeText(text,x,y);
ctx.fillStyle=COLORS.border;
ctx.fillText(text,x,y);
}

function mulberry32(seed){
let t=seed>>>0;
return function(){
t+=0x6D2B79F5;
let r=Math.imul(t^(t>>>15),t|1);
r^=r+Math.imul(r^(r>>>7),r|61);
return((r^(r>>>14))>>>0)/4294967296;
}
}