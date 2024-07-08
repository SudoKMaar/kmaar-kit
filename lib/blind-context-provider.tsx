"use client";
import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

type Blind = {
  isBlind: boolean;
  setIsBlind: (arg: React.SetStateAction<boolean>) => void;
  nerdTips: string;
  setNerdTips: (arg: React.SetStateAction<string>) => void;
};

const BlindContext = createContext<Blind | null>(null);
export const useBlindCtx = () => {
  const context = useContext(BlindContext);
  if (!context) throw new Error("Can't access context outside <main>");
  return context;
};

type ProviderProps = PropsWithChildren;

const BlindContextProvider = ({ children }: ProviderProps) => {
  const [isBlind, setIsBlind] = useState(true);
  const [nerdTips, setNerdTips] = useState(
    "Looks like we've got another nerd on our hands \u{1F440}...."
  );

  return (
    <BlindContext.Provider
      value={{ isBlind, setIsBlind, nerdTips, setNerdTips }}
    >
      {children}
    </BlindContext.Provider>
  );
};

export default BlindContextProvider;
