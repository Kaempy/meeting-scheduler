import { Fragment } from 'react';
import { SlideTitle } from '.';
import { Input } from './FormElement';

const Step4 = () => {
  return (
    <Fragment>
      <SlideTitle title="Guest Details" />
      <Input
        inputProps={{
          id: 'g_name',
          name: 'g_name',
          type: 'text',
          label: 'Guest Name',
          placeholder: 'John Doe',
        }}
      />
      <Input
        inputProps={{
          id: 'g_email',
          name: 'g_email',
          type: 'email',
          label: 'Email Address',
          placeholder: 'johndoe@example.com',
        }}
      />
    </Fragment>
  );
};

export default Step4;
