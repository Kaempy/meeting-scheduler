/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Overlay = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/30"
      onClick={onClose}
    >
      {children}
    </div>
  );
};
const Portal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return createPortal(
    <Overlay onClose={onClose}>{children}</Overlay>,
    document.getElementById('portal')!
  );
};
export default Portal;
