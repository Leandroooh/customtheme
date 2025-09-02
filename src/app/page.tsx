"use client";

import ThemedButton from './components/ThemedButton';
import ThemedCard from './components/ThemedCard';
import { useTheme } from './Hooks/useTheme';

export default function Home() {
  const { toggleTheme, theme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <h1 className="text-2xl font-bold">Sistema de Tema Dinâmico</h1>

      <ThemedButton label="Trocar Tema" onClick={toggleTheme} />
      <p>Tema atual: <b>{theme}</b></p>

      <ThemedCard>
        <p>Esse é um card estilizado dinamicamente via JSON 🎨</p>
      </ThemedCard>
    </main>
  );
}