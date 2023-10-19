import { Fragment } from 'react';
import { SlideTitle } from '.';
import { Input } from './FormElement';

const Step3 = () => {
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
        }}
      />
      <Input
        inputProps={{
          id: 'desc',
          name: 'desc',
          type: 'text',
          label: 'Description',
          placeholder: 'Write a short Description of the meeting.',
        }}
      />
    </Fragment>
  );
};

export default Step3;
