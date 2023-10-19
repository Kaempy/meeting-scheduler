import { type FC, type ReactNode } from 'react';
import { useTheme } from '../context/theme-context';
import Footer from './footer';
import Navbar from './navbar';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <main
        className={`w-full
       ${
         theme === 'dark'
           ? 'bg-dark bg-fixed bg-center xl:bg-right'
           : 'bg-light bg-fixed bg-center lg:bg-local'
       } bg-cover bg-no-repeat `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
