import { useThemeContext } from '../context/themeProvider';

export const useTheme = () => {
  const { theme, setTheme, themeConfig } = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, setTheme, toggleTheme, themeConfig };
};
