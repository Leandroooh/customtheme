"use client";

import { useTheme } from '../Hooks/useTheme';

interface ThemedButtonProps {
  label: string;
  onClick?: () => void;
}

export default function ThemedButton({ label, onClick }: ThemedButtonProps) {
  const { themeConfig } = useTheme();
  const style = themeConfig.button;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: style.bg,
        color: style.text,
        borderRadius: style.radius,
      }}
      className="px-4 py-2 font-medium transition-colors"
      onMouseOver={(e) =>
      ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
        style.hover)
      }
      onMouseOut={(e) =>
      ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
        style.bg)
      }
    >
      {label}
    </button>
  );
}
