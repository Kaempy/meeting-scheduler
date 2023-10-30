/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className="laptop:mx-auto mx-8 my-auto max-w-lg rounded-lg bg-fuchsia-50 px-8 py-6 dark:bg-slate-900"
    >
      {children}
    </section>
  );
};

export default Card;
