import { memo } from 'react';

type Props = {
  id: string;
  name: string;
  label: string;
  type:
    | 'button'
    | 'checkbox'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'password'
    | 'submit'
    | 'tel'
    | 'time'
    | 'text'
    | 'url';
  placeholder?: string;
};

type ButtonProps = {
  type: 'submit' | 'button';
  text: string;
  onClick?: () => void;
  className?: string;
};

const Input = memo(({ inputProps }: { inputProps: Props }) => {
  const { label, id, ...rest } = inputProps;
  if (rest.name === 'desc') {
    return (
      <div className="mt-6">
        <label
          htmlFor={id}
          className="text-sm text-gray-900 dark:text-gray-200"
        >
          {label}
        </label>
        <textarea
          style={{ resize: 'none' }}
          rows={3}
          {...rest}
          className="mt-2 block w-full rounded-lg border border-gray-200 bg-fuchsia-50 px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
        />
      </div>
    );
  }
  return (
    <div className="mt-6">
      <label
        htmlFor={id}
        className="mb-2 block text-sm text-gray-900 dark:text-gray-200"
      >
        {label}
        <input
          {...rest}
          className="mt-2 block w-full rounded-lg border border-gray-200 bg-fuchsia-50 px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
        />
      </label>
    </div>
  );
});

const Button = memo(({ type, text, onClick, className }: ButtonProps) => {
  return (
    <div className="mt-6">
      <button type={type} onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
});
export { Button, Input };
