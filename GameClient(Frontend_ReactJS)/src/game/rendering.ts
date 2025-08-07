import { GameState } from "../types";

// Basic 8-bit pixel art palette
const TILE_SIZE = 16;
const PLAYER_COLORS = ["#F6D860", "#1C1B19", "#A18C54", "#63C6E0", "#df382c"];
const OUTLINE = "#2e341f";

export function renderGameScene(canvas: HTMLCanvasElement, state: GameState) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Clear
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = "#1a1d2d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw level background
  drawLevelBackground(ctx, state);

  // Draw player
  drawPlayer(ctx, state);

  // TODO: Draw objects, collectibles etc.

  ctx.restore();
}

function drawLevelBackground(ctx: CanvasRenderingContext2D, state: GameState) {
  // Very basic: fill with palette color 0
  ctx.fillStyle = state.level.palette[0];
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Placeholders: draw a grid for pixel-art
  ctx.strokeStyle = "#22243d";
  for (let x = 0; x < ctx.canvas.width; x += TILE_SIZE) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, ctx.canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < ctx.canvas.height; y += TILE_SIZE) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(ctx.canvas.width, y);
    ctx.stroke();
  }
}

function drawPlayer(ctx: CanvasRenderingContext2D, state: GameState) {
  const { x, y, facing } = state.player;
  ctx.save();

  // Player body: simple pixel-rectangle for prototype
  ctx.fillStyle = PLAYER_COLORS[0];
  ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

  // Player outline
  ctx.strokeStyle = OUTLINE;
  ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);

  // Face direction indicator (eye)
  ctx.fillStyle = PLAYER_COLORS[3];
  if (facing === "right") {
    ctx.fillRect(x + 11, y + 5, 2, 2);
  } else {
    ctx.fillRect(x + 3, y + 5, 2, 2);
  }

  ctx.restore();
}
