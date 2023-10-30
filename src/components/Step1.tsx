import { SlideTitle } from '@components/index';
import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from './FormElement';

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Fragment>
      <SlideTitle title="Personal Details" />
      <Input
        inputProps={{
          id: 'name',
          name: 'name',
          type: 'text',
          label: 'Name',
          placeholder: 'John Doe',
          register: { ...register('name') },
          error: errors.name?.message as string,
        }}
      />
      <Input
        inputProps={{
          id: 'email',
          name: 'email',
          type: 'email',
          label: 'Email',
          placeholder: 'johndoe@example.com',
          register: { ...register('email') },
          error: errors.email?.message as string,
        }}
      />
    </Fragment>
  );
};

export default Step1;
