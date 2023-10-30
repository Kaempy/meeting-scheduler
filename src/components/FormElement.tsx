/* eslint-disable react/button-has-type */
import { memo } from 'react';

type Props = {
  id: string;
  name: string;
  label: string;
  type: 'button' | 'date' | 'datetime-local' | 'email' | 'time' | 'text';
  placeholder?: string;
  error?: string;
  register: any;
};

type ButtonProps = {
  type: 'submit' | 'button';
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Input = memo(({ inputProps }: { inputProps: Props }) => {
  const { label, id, register, error, ...rest } = inputProps;
  if (rest.name === 'desc') {
    return (
      <div className="mt-6">
        <label
          htmlFor={id}
          className="font-bricolage text-sm text-gray-900 dark:text-gray-200"
        >
          {label}
        </label>
        <textarea
          id={id}
          style={{ resize: 'none' }}
          rows={3}
          {...register}
          {...rest}
          className="mt-2 block w-full rounded-lg border border-gray-200 bg-fuchsia-50 px-4 py-2 font-bricolage text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
        />
        {error ? (
          <small className="ml-2 font-bricolage text-xs text-[firebrick] dark:text-[#ec5c5c]">
            {error}
          </small>
        ) : null}
      </div>
    );
  }
  return (
    <div className="mt-6">
      <label
        htmlFor={id}
        className="mb-2 block font-bricolage text-sm text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      <input
        id={id}
        {...register}
        {...rest}
        className="mt-2 block w-full rounded-lg border border-gray-200 bg-fuchsia-50 px-4 py-2 font-bricolage text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
      />
      {error ? (
        <small className="ml-2 font-bricolage text-xs text-[firebrick] dark:text-[#ec5c5c]">
          {error}
        </small>
      ) : null}
    </div>
  );
});

const Button = memo(
  ({ type, text, onClick, className, disabled }: ButtonProps) => {
    return (
      <div className="my-4 w-auto pt-6">
        <button
          type={type}
          onClick={onClick}
          className={className}
          disabled={disabled}
        >
          {text}
        </button>
      </div>
    );
  }
);
export { Button, Input };
