import React, { createContext, useContext } from "react";
import { Howl } from "howler";

type AudioContextType = {
  playSfx: (sfx: string) => void;
  playMusic: (track: string) => void;
  stopMusic: () => void;
};

const noop = () => {};
const audioCtx = createContext<AudioContextType>({
  playSfx: noop,
  playMusic: noop,
  stopMusic: noop
});

const SFX: Record<string, Howl> = {}; // Populate if you have SFX files
const MUSIC: Record<string, Howl> = {}; // Populate if you have music files

export function AudioProvider({ children }: { children: React.ReactNode }) {
  // For demo, provide stubs
  const playSfx = (sfx: string) => {
    if (SFX[sfx]) SFX[sfx].play();
  };
  const playMusic = (track: string) => {
    if (MUSIC[track]) MUSIC[track].play();
  };
  const stopMusic = () => {
    Object.values(MUSIC).forEach((howl) => howl.stop());
  };

  return (
    <audioCtx.Provider value={{ playSfx, playMusic, stopMusic }}>
      {children}
    </audioCtx.Provider>
  );
}

export function useAudio() {
  return useContext(audioCtx);
}
