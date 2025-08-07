import React, { useRef, useEffect } from "react";
import { useGameStore } from "../state/gameStore";
import { renderGameScene } from "../game/rendering";
import { handleInput } from "../game/input";
import "../styles/GameCanvas.css";

export const GAME_WIDTH = 320;
export const GAME_HEIGHT = 240;

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { gameState } = useGameStore();

  // Setup 60 FPS redraw
  useEffect(() => {
    let animationFrame: number;
    function draw() {
      if (canvasRef.current && gameState) {
        renderGameScene(canvasRef.current, gameState);
      }
      animationFrame = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrame);
  }, [gameState]);

  // Keyboard/gamepad listeners on focus
  useEffect(() => {
    function keydown(e: KeyboardEvent) {
      handleInput(e, "down");
    }
    function keyup(e: KeyboardEvent) {
      handleInput(e, "up");
    }
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    // TODO: Gamepad support can be added here.
    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    };
  }, []);

  // Responsive scaling for mobile/desktop
  const outerStyle: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#18161d"
  };

  // The actual canvas is always GAME_WIDTH x GAME_HEIGHT for crisp pixel-art
  return (
    <div style={outerStyle}>
      <canvas
        ref={canvasRef}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        tabIndex={0}
        className="game-canvas"
        role="application"
        aria-label="PixelQuest Game World"
      />
    </div>
  );
}
