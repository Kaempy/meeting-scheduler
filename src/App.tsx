import { lazy } from 'react';
import './App.css';
import { ThemeContextProvider } from './context/theme-context';

const HomePage = lazy(async () => await import('./components/page'));
const Layout = lazy(async () => await import('./layout'));

const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeContextProvider>
  );
};

export default App;
