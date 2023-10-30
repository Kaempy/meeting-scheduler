import { useTheme } from '@hooks/useCtx';
import { MoonIcon, SunIcon } from '@icons/index';

const Navbar = () => {
  const { theme, themeToggle } = useTheme();

  return (
    <nav className="fixed top-0 mx-auto flex w-screen items-center justify-between border border-x-0 border-t-0 border-b-[#ffffff50] bg-[#fae8ff80] px-6 py-4 shadow-sm backdrop-blur-sm dark:bg-[#ffffff10] lg:px-20">
      <a href="/" aria-label="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:h-10 md:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      </a>
      {theme === 'dark' ? (
        <button
          type="button"
          className="transform rounded-lg bg-gray-100 px-1.5 py-1.5 text-gray-500 transition-colors duration-300 focus:outline-none dark:bg-gray-800 dark:text-gray-300"
          aria-label="light mode button"
          onClick={() => themeToggle('light')}
        >
          <SunIcon />
        </button>
      ) : (
        <button
          type="button"
          className="transform rounded-lg bg-gray-100 px-1.5 py-1.5 text-gray-500 transition-colors duration-300 focus:outline-none dark:bg-gray-800 dark:text-gray-300"
          aria-label="dark mode button"
          onClick={() => themeToggle('dark')}
        >
          <MoonIcon />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
