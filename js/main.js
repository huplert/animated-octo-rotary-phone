const state = {
  map: maps.starter_town,
  player: {
    x: 80,
    y: 72,
    speed: 1
  },
  dialogue: null,
  rosterOpen: false,
  rosterIndex: 0
};

function openDialogue(lines) {
  state.dialogue = { lines, index: 0 };
}

function closeDialogue() {
  state.dialogue = null;
}

function facingTile() {
  return {
    x: Math.floor(state.player.x / TILE),
    y: Math.floor(state.player.y / TILE)
  };
}

function tryInteract() {
  if (state.dialogue) {
    if (state.dialogue.index < state.dialogue.lines.length - 1) {
      state.dialogue.index++;
    } else {
      closeDialogue();
    }
    return;
  }

  const p = facingTile();

  for (const npc of state.map.npcs) {
    const nx = Math.floor(npc.x / TILE);
    const ny = Math.floor(npc.y / TILE);
    if (nx === p.x && ny === p.y) {
      openDialogue(npc.text);
      return;
    }
  }

  for (const sign of state.map.signs) {
    if (sign.x === p.x && sign.y === p.y) {
      openDialogue(sign.text);
      return;
    }
  }
}

function updatePlayer() {
  if (state.dialogue || state.rosterOpen) return;

  if (keys.i || keys.I) state.player.y -= state.player.speed;
  if (keys.k || keys.K) state.player.y += state.player.speed;
  if (keys.j || keys.J) state.player.x -= state.player.speed;
  if (keys.l || keys.L) state.player.x += state.player.speed;

  state.player.x = Math.max(0, Math.min(SCREEN_W - PLAYER_SIZE, state.player.x));
  state.player.y = Math.max(0, Math.min(SCREEN_H - PLAYER_SIZE, state.player.y));
}

function updateUI() {
  if (consumePress("z") || consumePress("Z")) {
    tryInteract();
  }

  if (consumePress("x") || consumePress("X")) {
    closeDialogue();
    state.rosterOpen = false;
  }

  if (consumePress("c") || consumePress("C")) {
    if (!state.dialogue) {
      state.rosterOpen = !state.rosterOpen;
    }
  }

  if (state.rosterOpen) {
    if (consumePress("j") || consumePress("J")) {
      state.rosterIndex = (state.rosterIndex + CREATURES.length - 1) % CREATURES.length;
    }
    if (consumePress("l") || consumePress("L")) {
      state.rosterIndex = (state.rosterIndex + 1) % CREATURES.length;
    }
  }
}

function update() {
  updateUI();
  updatePlayer();
}

function runSelfTests() {
  console.assert(typeof maps !== "undefined", "maps should exist");
  console.assert(typeof CREATURES !== "undefined", "CREATURES should exist");
  console.assert(CREATURES.length === 151, "Expected 151 creatures");
  console.assert(state.map.width === 32, "Map width should be 32");
  console.assert(state.map.height === 32, "Map height should be 32");
  console.assert(state.map.bg[0][0] === Tile.TREE, "Top-left tile should be a tree border");
}

function gameLoop() {
  update();
  render(state);

  for (const key in justPressed) {
    justPressed[key] = false;
  }

  requestAnimationFrame(gameLoop);
}

runSelfTests();
gameLoop();