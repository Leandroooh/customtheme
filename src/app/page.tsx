"use client";

import ThemedButton from './components/ThemedButton';
import ThemedCard from './components/ThemedCard';
import { useTheme } from './Hooks/useTheme';

export default function Home() {
  const { toggleTheme, theme } = useTheme();

  return (
    <main className="flex flex-row px-48 items-center justify-center min-h-screen gap-80 p-6">
      <div className='pl-25 pr-10'>
        <h1 className="text-2xl font-bold"></h1>

        <h1 className='text-5xl font-bold'>Cantinho Feliz</h1>
        <h3 className='text-3xl mt-6'>Local onde você realiza seus Logins e não fica puto por esquecer a senha!</h3>

        <p className='mt-6 text-2xl'>Ainda não possui conta? Realize seu cadastro <span>clicando Aqui</span></p>

        <div className='mt-6'>
          <ThemedButton label="Trocar Tema" onClick={toggleTheme} />
        </div>
      </div>
      <div className='min-h-xl'>
        <ThemedCard emailText='p@dev.com' passwordText='1234' />
      </div>
    </main>
  );
}