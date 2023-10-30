import { SlideTitle } from '@components/index';
import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from './FormElement';

const Step4 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Fragment>
      <SlideTitle title="Guest Details" />
      <Input
        inputProps={{
          id: 'gName',
          name: 'gName',
          type: 'text',
          label: 'Guest Name',
          placeholder: 'John Doe',
          register: { ...register('gName') },
          error: errors.gName?.message as string,
        }}
      />
      <Input
        inputProps={{
          id: 'gEmail',
          name: 'gEmail',
          type: 'email',
          label: 'Email Address',
          placeholder: 'johndoe@example.com',
          register: { ...register('gEmail') },
          error: errors.gEmail?.message as string,
        }}
      />
    </Fragment>
  );
};

export default Step4;
