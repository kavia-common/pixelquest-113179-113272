import React from "react";
import "../styles/OverlayMenu.css";

// PUBLIC_INTERFACE
export function SettingsMenu({ onBack }: { onBack: () => void }) {
  return (
    <div className="overlay-menu settings-menu">
      <h2>Settings</h2>
      {/* Accessibility, remap controls, colorblind palette, etc. */}
      <button onClick={onBack}>Back</button>
    </div>
  );
}
