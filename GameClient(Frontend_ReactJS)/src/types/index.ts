export type PlayerAbilities = {
  doubleJump: boolean,
  dash: boolean,
  wallJump: boolean,
  grapple: boolean,
  timeSlow: boolean
};

export type PlayerStatus = {
  x: number,
  y: number,
  vx: number,
  vy: number,
  onGround: boolean,
  facing: "left" | "right",
  currentAnim: string,
  abilities: PlayerAbilities,
  lives: number,
  gems: number,
  health: number
};

// Add more level elements as needed
export type LevelData = {
  id: number,
  name: string,
  layout: number[][],
  tileset: string,
  objects: any[],
  collectibles: any[],
  palette: string[]
};

export type GameState = {
  player: PlayerStatus,
  level: LevelData,
  score: number,
  checkpoint: { x: number, y: number },
  paused: boolean
};
