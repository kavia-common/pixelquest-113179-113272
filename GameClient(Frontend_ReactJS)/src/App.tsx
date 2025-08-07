import React, { useEffect } from "react";
import { GameCanvas } from "./components/GameCanvas";
import { MainMenu } from "./overlays/MainMenu";
import { HUD } from "./overlays/HUD";
import { PauseMenu } from "./overlays/PauseMenu";
import { SettingsMenu } from "./overlays/SettingsMenu";
import { useGameStore } from "./state/gameStore";
import { AudioProvider } from "./sound/AudioProvider";


const OVERLAYS = {
  NONE: 0,
  MAIN_MENU: 1,
  PAUSE: 2,
  SETTINGS: 3,
};

function App() {
  const { overlay, setOverlay, running, startGame, pauseGame, resumeGame } = useGameStore();

  useEffect(() => {
    function handleGlobalKeydown(e: KeyboardEvent) {
      if (e.key === "Escape" && running) {
        pauseGame();
      }
      // Additional global hotkeys/shortcuts.
    }
    window.addEventListener("keydown", handleGlobalKeydown);
    return () => window.removeEventListener("keydown", handleGlobalKeydown);
  }, [running, pauseGame]);

  return (
    <AudioProvider>
      <div className="app-root">
        <GameCanvas />
        {overlay === OVERLAYS.NONE && running && <HUD />}
        {overlay === OVERLAYS.MAIN_MENU && <MainMenu onStart={startGame} onSettings={() => setOverlay(OVERLAYS.SETTINGS)} />}
        {overlay === OVERLAYS.PAUSE && <PauseMenu onResume={resumeGame} onExit={() => setOverlay(OVERLAYS.MAIN_MENU)} />}
        {overlay === OVERLAYS.SETTINGS && <SettingsMenu onBack={() => setOverlay(OVERLAYS.MAIN_MENU)} />}
      </div>
    </AudioProvider>
  );
}

export default App;
