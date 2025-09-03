"use client"
import Link from 'next/link';
import { ThemedInput } from '../components/ThemedInput';
import { useState } from 'react';
import ThemedButton from '../components/ThemedButton';

export default function register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className='max-w-7xl mx-auto min-h-dvh flex items-center gap-40 justify-center'>
      <section className='min-w-1/2 flex gap-6 flex-col'>
        <div>
          <h1 className='text-5xl font-bold'>Central da Empresa</h1>
          <h3 className='text-4xl'>Entre para acessar nosso aplicativos!</h3>
        </div>

        <div>
          <p className='text-lg '>Você já possúi uma conta?</p>
          <Link className='text-lg font-semibold' href={'/login'}>Realize seu <span className='text-[#4D47C3]'>login agora!</span></Link>
          {/* <ThemedButton label='Cadastrar' /> */}
        </div>

      </section>

      <form action="#" className='max-w-1/2 flex flex-col gap-6 '>

        <h1 className='text-3xl font-medium'>Registrar</h1>

        <fieldset className='flex flex-col gap-4'>
          <ThemedInput onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' value={email} />
          <ThemedInput onChange={(e) => setPassword(e.target.value)} placeholder='Usuário' value={password} />
          <ThemedInput onChange={(e) => setPassword(e.target.value)} placeholder='Senha' value={password} />
          <ThemedInput onChange={(e) => setPassword(e.target.value)} placeholder='Confirmação de Senha' value={password} />

          <Link href={'/'} className='self-end text-[#B0B0B0]'>Trocar senha?</Link>
        </fieldset>

        <ThemedButton label='Login' />

      </form>
    </main>
  )
}