import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  themeToggle: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return themeCtx;
};

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme = localStorage.getItem('theme') as Theme;
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  const rootElement = document.documentElement;

  const [theme, setTheme] = useState<Theme>(storedTheme || 'system');

  const onWindowMatch = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && prefersDarkMode.matches)
    ) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    onWindowMatch();
  }, []);

  useEffect(() => {
    switch (theme) {
      case 'dark':
        rootElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        rootElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  const themeToggle = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const listener = () => {
      if (!('theme' in localStorage)) {
        onWindowMatch();
      }
    };

    prefersDarkMode.addEventListener('change', listener);

    return () => {
      prefersDarkMode.removeEventListener('change', listener);
    };
  }, []);

  const value = { theme, themeToggle };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider, useTheme };
