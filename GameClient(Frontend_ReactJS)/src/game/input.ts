import { useGameStore } from "../state/gameStore";

const keyActions: Record<string, string> = {
  ArrowLeft: "moveLeft",
  ArrowRight: "moveRight",
  ArrowUp: "jump",
  ArrowDown: "duck",
  z: "attack",
  x: "dash"
};

export function handleInput(e: KeyboardEvent, type: "down" | "up") {
  const { gameState, setGameState } = useGameStore.getState();
  // (This direct call is OK with Zustand)
  const action = keyActions[e.key];
  if (!action) return;

  // Basic movement
  if (type === "down") {
    if (action === "moveLeft") {
      setGameState({ ...gameState, player: { ...gameState.player, vx: -2, facing: "left" } });
    } else if (action === "moveRight") {
      setGameState({ ...gameState, player: { ...gameState.player, vx: 2, facing: "right" } });
    } else if (action === "jump" && gameState.player.onGround) {
      setGameState({ ...gameState, player: { ...gameState.player, vy: -5, onGround: false } });
    }
    // Add more actions as needed (attack, dash, etc.)
  } else if (type === "up") {
    if (action === "moveLeft" || action === "moveRight") {
      setGameState({ ...gameState, player: { ...gameState.player, vx: 0 } });
    }
    // Add more release-logic here.
  }
}
