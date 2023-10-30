import { StoreContext } from '@context/store-context';
import { ThemeContext } from '@context/theme-context';
import { useContext } from 'react';

const useTheme = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return themeCtx;
};

const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error('useStore must be used within a StoreContextProvider');
  }
  return ctx;
};
export { useStore, useTheme };
