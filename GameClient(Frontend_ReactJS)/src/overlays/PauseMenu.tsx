import React from "react";
import "../styles/OverlayMenu.css";

// PUBLIC_INTERFACE
export function PauseMenu({ onResume, onExit }: { onResume: () => void; onExit: () => void }) {
  return (
    <div className="overlay-menu pause-menu">
      <h2>Game Paused</h2>
      <button onClick={onResume}>Resume</button>
      <button onClick={onExit}>Exit to Menu</button>
    </div>
  );
}
