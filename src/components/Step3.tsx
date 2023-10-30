import { SlideTitle } from '@components/index';
import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from './FormElement';

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Fragment>
      <SlideTitle title="Meeting Details" />
      <Input
        inputProps={{
          id: 'type',
          name: 'type',
          type: 'text',
          label: 'Meeting Type',
          placeholder: 'Interview',
          register: { ...register('type') },
          error: errors.type?.message as string,
        }}
      />
      <Input
        inputProps={{
          id: 'desc',
          name: 'desc',
          type: 'text',
          label: 'Description',
          placeholder: 'Write a short Description of the meeting.',
          register: { ...register('desc') },
          error: errors.desc?.message as string,
        }}
      />
    </Fragment>
  );
};

export default Step3;
