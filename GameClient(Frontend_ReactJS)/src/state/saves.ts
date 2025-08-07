import { GameState, PlayerAbilities } from "../types";

const LOCAL_KEY = "pixelquest-save-1";

export function defaultGameState(): GameState {
  return {
    player: {
      x: 32,
      y: 192,
      vx: 0,
      vy: 0,
      onGround: false,
      facing: "right",
      currentAnim: "idle",
      abilities: {
        doubleJump: false,
        dash: false,
        wallJump: false,
        grapple: false,
        timeSlow: false
      },
      lives: 3,
      gems: 0,
      health: 3
    },
    level: {
      id: 1,
      name: "Sunrise Valley",
      layout: [], // Load actual tile data here if needed.
      tileset: "default",
      objects: [],
      collectibles: [],
      palette: ["#181d27", "#f7f7f1", "#ee703a", "#3057b6", "#e1c84c", "#70af55"]
    },
    score: 0,
    checkpoint: { x: 32, y: 192 },
    paused: false
  };
}

export function saveGame(state: GameState) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
  } catch (e) {
    // Ignore for now
  }
}

export function loadSave(): GameState | null {
  try {
    const str = localStorage.getItem(LOCAL_KEY);
    if (str) return JSON.parse(str);
    return null;
  } catch (e) {
    return null;
  }
}
