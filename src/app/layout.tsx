import "./globals.css";

import { ThemeProvider } from './context/themeProvider';

export const metadata = {
  title: "Dynamic Theme System",
  description: "Theme driven UI with JSON + Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
