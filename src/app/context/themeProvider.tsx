"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import themes from "../data/theme.json";

type ThemeKey = keyof typeof themes;

interface ThemeContextType {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  themeConfig: (typeof themes)[ThemeKey];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeKey>("light");

  const value: ThemeContextType = {
    theme,
    setTheme,
    themeConfig: themes[theme],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext deve ser usado dentro de ThemeProvider");
  return context;
}
