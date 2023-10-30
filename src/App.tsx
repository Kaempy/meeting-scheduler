import Popups from '@components/Popups';
import { StoreContextProvider } from '@context/store-context';
import { lazy } from 'react';
import { ThemeContextProvider } from './context/theme-context';

const HomePage = lazy(() => import('./components/page'));
const Layout = lazy(() => import('./layout'));

const App = () => {
  return (
    <ThemeContextProvider>
      <StoreContextProvider>
        <Layout>
          <Popups />
          <HomePage />
        </Layout>
      </StoreContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
