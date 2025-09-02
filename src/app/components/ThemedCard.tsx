"use client";

import { ReactNode } from "react";
import { useTheme } from "../Hooks/useTheme";
import ThemedButton from './ThemedButton';

type themedCardProps = {
  emailText: string;
  passwordText: string;
}

export default function ThemedCard({ emailText, passwordText }: themedCardProps) {
  const { themeConfig } = useTheme();
  const style = themeConfig.card;

  return (
    <div
      style={{
        backgroundColor: style.bg,
        color: style.text,
        border: `1px solid ${style.border}`,
      }}
      className="w-full max-w-xl h-full min-h-96 border mx-auto mt-10 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Entrar</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">E-mail</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder={emailText}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Senha</label>
          <div className="">
            <input
              type="password"
              className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-[#F0EFFF] focus:ring-purple-500"
              placeholder={passwordText}
            />
          </div>
        </div>

        <div
          style={{ color: style.text }}
          className="text-right text-sm hover:underline cursor-pointer">
          Esqueceu sua Senha?
        </div>

        <ThemedButton label='Login' />

      </form>
    </div>
  );
}
