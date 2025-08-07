import create from "zustand";
import { GameState, PlayerAbilities } from "../types";
import { defaultGameState, loadSave, saveGame } from "./saves";

type OverlayType = 0 | 1 | 2 | 3;

interface GameStore {
  running: boolean;
  overlay: OverlayType;
  setOverlay: (o: OverlayType) => void;
  gameState: GameState;
  setGameState: (gs: GameState) => void;
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  save: () => void;
  load: () => void;
  // Add more for extensibility as needed!
}

export const useGameStore = create<GameStore>((set, get) => ({
  running: false,
  overlay: 1, // Show main menu first
  setOverlay: (o) => set({ overlay: o }),
  gameState: defaultGameState(),
  setGameState: (gs) => set({ gameState: gs }),
  startGame: () => {
    set({
      running: true,
      overlay: 0,
      gameState: defaultGameState()
    });
  },
  pauseGame: () => set({ running: false, overlay: 2 }),
  resumeGame: () => set({ running: true, overlay: 0 }),
  save: () => saveGame(get().gameState),
  load: () => set({ gameState: loadSave() || defaultGameState() })
}));
