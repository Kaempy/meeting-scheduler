import { z } from 'zod';

type TSchema = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(3, 'Name is required!'),
  email: z
    .string()
    .min(3, 'Email is required!')
    .email('Email address not valid')
    .trim()
    .toLowerCase(),
  day: z
    .date({ required_error: 'Please pick date to schedule meeting for' })
    .min(new Date()),
  startTime: z.date({ description: 'Please select meeting start time' }),
  endTime: z.date({ description: 'Please select meeting end time' }),
  type: z.string().min(3, 'Please write tag for the meeting!'),
  desc: z.string().min(3, 'Please write a description for the meeting!'),
  gName: z.string().min(3, 'Name is required!'),
  gEmail: z
    .string()
    .min(3, 'Email is required!')
    .email('Email address not valid')
    .trim()
    .toLowerCase(),
});

export { schema, type TSchema };
