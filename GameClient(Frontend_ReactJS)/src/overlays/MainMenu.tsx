import React from "react";
import "../styles/OverlayMenu.css";

// PUBLIC_INTERFACE
export function MainMenu({ onStart, onSettings }: { onStart: () => void; onSettings: () => void }) {
  return (
    <div className="overlay-menu main-menu">
      <h1 className="pixel-title">PixelQuest</h1>
      <button onClick={onStart}>Start Game</button>
      <button onClick={onSettings}>Settings</button>
      <footer>
        <small>
          &copy; {new Date().getFullYear()} PixelQuest | 2D Platformer. Controls: [Arrows, Z/X]
        </small>
      </footer>
    </div>
  );
}
