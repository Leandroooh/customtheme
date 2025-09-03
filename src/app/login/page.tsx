"use client"
import Link from 'next/link';
import { ThemedInput } from '../components/ThemedInput';
import { useState } from 'react';
import ThemedButton from '../components/ThemedButton';

export default function login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="max-w-7xl mx-auto min-h-dvh flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 px-4 py-10">
      {/* Seção lateral — visível apenas em telas médias pra cima */}
      <section className="hidden lg:flex min-w-[50%] flex-col gap-7">
        <div>
          <h1 className="text-3xl lg:text-4xl mb-2 font-bold">Central da Empresa</h1>
          <h3 className="text-2xl lg:text-3xl">Entre para acessar nossos aplicativos!</h3>
        </div>

        <div>
          <p className="text-base lg:text-lg font-medium">Ainda não realizou seu cadastro?</p>
          <Link className="text-base lg:text-lg font-semibold" href="/register">
            Realize seu <span className="text-[#4D47C3]">cadastro agora</span>
          </Link>
        </div>
      </section>

      {/* Formulário — ocupa toda largura no mobile */}
      <form action="#" className="w-full max-w-md flex flex-col gap-6 p-6 rounded-lg">
        <h1 className="text-2xl lg:text-3xl font-medium ml-2 ">Login</h1>

        <fieldset className="flex flex-col gap-4 max-w-1/2">
          <div className="flex flex-col gap-4 max-w-full">
            <ThemedInput
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Informe e-mail ou username"
              value={email}
            />
            <ThemedInput
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              value={password}
            />
            <Link href="/" className="text-[#B0B0B0] text-sm lg:text-base w-fit self-end">
              Trocar senha?
            </Link>
          </div>
        </fieldset>

        <ThemedButton label="Login" />
      </form>
    </main>

  )
}