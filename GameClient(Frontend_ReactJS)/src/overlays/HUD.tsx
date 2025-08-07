import React from "react";
import { useGameStore } from "../state/gameStore";
import "../styles/HUD.css";

export function HUD() {
  const { gameState } = useGameStore();
  const { player, score } = gameState;
  return (
    <div className="hud">
      <span>❤️ {player.lives}</span>
      <span>💎 {player.gems}</span>
      <span>🏆 {score}</span>
      {/* Icons for abilities etc. */}
    </div>
  );
}
