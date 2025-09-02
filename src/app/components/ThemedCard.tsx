"use client";

import { ReactNode } from "react";
import { useTheme } from '../Hooks/useTheme';

interface ThemedCardProps {
  children: ReactNode;
}

export default function ThemedCard({ children }: ThemedCardProps) {
  const { themeConfig } = useTheme();
  const style = themeConfig.card;

  return (
    <div
      style={{
        backgroundColor: style.bg,
        color: style.text,
        border: `1px solid ${style.border}`,
      }}
      className="p-4 rounded-lg shadow-md"
    >
      {children}
    </div>
  );
}
