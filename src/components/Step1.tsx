import { Fragment } from 'react';
import { SlideTitle } from '.';
import { Input } from './FormElement';

const Step1 = () => {
  return (
    <Fragment>
      <SlideTitle title=" Personal Details" />
      <Input
        inputProps={{
          id: 'name',
          name: 'name',
          type: 'text',
          label: 'Name',
          placeholder: 'John Doe',
        }}
      />
      <Input
        inputProps={{
          id: 'email',
          name: 'email',
          type: 'email',
          label: 'Email',
          placeholder: 'johndoe@example.com',
        }}
      />
    </Fragment>
  );
};

export default Step1;
