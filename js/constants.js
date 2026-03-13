"use strict";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;
ctx.lineJoin = "round";
ctx.lineWidth = 2;

const SCREEN_W = 160;
const SCREEN_H = 144;
const TILE = 8;
const PLAYER_SIZE = 8;

const COLORS = {
  c0: "#0f380f",
  c1: "#306230",
  c2: "#8bac0f",
  c3: "#9bbc0f",
  ui: "#e0f8d0",
  border: "#081820"
};

const Tile = {
  GRASS: 0,
  PATH: 1,
  TREE: 2,
  WATER: 3,
  TALL_GRASS: 4,
  WALL: 5,
  FLOOR: 6,
  DOOR: 7,
  SIGN: 8,
  ROOF: 9
};

function drawText(text, x, y) {
  ctx.strokeStyle = COLORS.ui;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = COLORS.border;
  ctx.fillText(text, x, y);
}

function make2D(w, h, fill) {
  return Array.from({ length: h }, () =>
    Array.from({ length: w }, () => fill)
  );
}

function rectsOverlap(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}