import Card from '../shared/Card';
import { Button } from './FormElement';
import success from '/img/success.png';

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Card>
      <div className="mx-auto my-0 text-center">
        <div className="mb-10">
          <img
            src={success}
            alt="success icon"
            className="m-auto w-[75px] object-contain"
          />
        </div>
        <h3 className="my-3 text-2xl font-semibold leading-6 text-gray-800 dark:text-slate-300">
          Meeting has been created
        </h3>
        <p className="leading-6 text-gray-600 dark:text-slate-500">
          Your meeting has been successfully created. You can now view the
          meeting details.
        </p>
      </div>
      <div className="my-4 flex w-full items-center justify-between">
        <Button
          text="Close"
          type="button"
          onClick={onClose}
          className="w-full transform border-none bg-slate-200 px-4 py-2 tracking-wide text-primary transition-colors duration-300 hover:border-none hover:bg-slate-300 focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-slate-400 dark:text-gray-900 dark:hover:bg-slate-500"
        />
        <Button
          text="Meeting Details"
          type="button"
          onClick={onClose}
          className="w-full transform border-none bg-primary px-4 py-2 tracking-wide text-white transition-colors duration-300 hover:border-none hover:bg-primary/90 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-slate-800 dark:text-primary dark:hover:bg-slate-950"
        />
      </div>
    </Card>
  );
};

export default SuccessModal;
