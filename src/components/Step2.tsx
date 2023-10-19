import { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { SlideTitle } from '.';
import { getDay } from '../helpers';
import { CalendarIcon, TimeIcon } from '../icons';

type DateProps = { day: Date; startTime: Date; endTime: Date };

const Step2 = () => {
  const defaultDate: DateProps = {
    day: new Date(),
    startTime: new Date(),
    endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
  };
  const [date, setDate] = useState(defaultDate);

  const changeHandler = (value: string) => (date: Date | null) => {
    setDate((prev) => ({ ...prev, [value]: date }));
  };
  const isWeekday = (date: Date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <Fragment>
      <SlideTitle title="Schedule Date & Time" />
      <div className="mt-6">
        <label className="mb-2 block text-sm text-gray-900 dark:text-gray-200">
          Pick Date
          <DatePicker
            showIcon
            icon={<CalendarIcon />}
            selected={date.day}
            onChange={(date) => changeHandler('day')(date)}
            minDate={new Date()}
            placeholderText="Select a date after 5 days ago"
            dateFormat="MMMM d, yyyy"
            filterDate={isWeekday}
            className="block w-full rounded-lg border-gray-200 bg-fuchsia-50 px-1 text-gray-700 placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
          />
        </label>
      </div>
      <div className="mt-6">
        <label
          htmlFor="timeInput"
          className="mb-2 block text-sm text-gray-900 dark:text-gray-200"
        >
          Pick Time
        </label>
        <div className="time relative flex w-full items-center justify-center gap-2 rounded-lg border-gray-200 bg-fuchsia-50 before:absolute before:left-[50%] before:translate-y-[15%] before:text-gray-700 before:content-[url('/svg/arrow.svg')] focus:border-none focus:outline-none focus:ring-0 dark:border dark:border-solid dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:before:text-gray-300 dark:focus:border-blue-400">
          <DatePicker
            showIcon
            icon={<TimeIcon />}
            selected={date.startTime}
            onChange={(date) => changeHandler('startTime')(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="block w-full rounded-lg border-gray-200 bg-fuchsia-50 px-1 text-gray-700 placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
          />
          <DatePicker
            selected={date.endTime}
            onChange={(date) => changeHandler('endTime')(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="block w-full rounded-lg border-gray-200 bg-fuchsia-50 px-1 text-gray-700 placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Step2;
