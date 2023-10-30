import Card from '@shared/Card';
import { Button } from './FormElement';

const Modal = ({
  title,
  desc,
  hasIcon,
  icon,
  btnText,
  onClick,
}: {
  title: string;
  desc: string;
  hasIcon?: boolean;
  icon?: any;
  btnText: string;
  onClick: () => void;
}) => {
  return (
    <Card>
      <div className="mx-auto my-0 text-center">
        {hasIcon ? (
          <div className="mb-10">
            <img
              src={icon}
              alt="success icon"
              className="m-auto w-[75px] object-contain"
            />
          </div>
        ) : null}
        <h3 className="my-3 font-fira text-2xl font-semibold leading-6 text-gray-800 dark:text-slate-300">
          {title}
        </h3>
        <p className="font-bricolage leading-6 text-gray-600 dark:text-slate-500">
          {desc}
        </p>
      </div>
      <Button
        text={btnText}
        type="button"
        onClick={onClick}
        className="w-full transform border-none bg-primary px-4 py-3 font-bricolage tracking-wide text-white transition-colors duration-300 hover:border-none hover:bg-primary/90 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-slate-800 dark:text-primary dark:hover:bg-slate-950"
      />
    </Card>
  );
};

export default Modal;
