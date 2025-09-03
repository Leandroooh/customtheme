"use client";
import ThemedButton from './components/ThemedButton';
import ThemedCard from './components/ThemedCard';
import { useTheme } from './Hooks/useTheme';
import Link from 'next/link';

export default function Home() {
  const { toggleTheme, theme } = useTheme();

  return (
    <main className="flex flex-row px-48 items-center justify-center min-h-screen gap-80 p-6">

      <Link href='/login'>Login</Link>

    </main>
  );
}