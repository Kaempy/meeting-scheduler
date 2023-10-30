/* eslint-disable jsx-a11y/label-has-associated-control */
import { SlideTitle } from '@components/index';
import { getDay } from '@helpers/index';
import { CalendarIcon, TimeIcon } from '@icons/index';
import { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';

const Step2 = () => {
  const { control } = useFormContext();

  const isWeekday = (date: Date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  // const filterPassedEndTime = (time: Date) => {
  //   const currentSelected = new Date(timeLimit!);
  //   const selectedDate = new Date(time.setMinutes(time.getMinutes() - 45));

  //   return currentSelected.getTime() < selectedDate.getTime();
  // };
  return (
    <Fragment>
      <SlideTitle title="Schedule Date & Time" />
      <div className="mt-6">
        <label
          htmlFor="dateInput"
          className="mb-2 block font-bricolage text-sm text-gray-900 dark:text-gray-200"
        >
          Pick Date
          <Controller
            control={control}
            name="day"
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState: { error },
            }) => (
              <Fragment>
                <DatePicker
                  id="dateInput"
                  showIcon
                  icon={<CalendarIcon />}
                  selected={value}
                  onChange={(date) => onChange(date)}
                  onBlur={onBlur}
                  ref={ref}
                  minDate={new Date(new Date().getTime() + 60 * 60 * 1000)}
                  placeholderText="Select day"
                  dateFormat="MMMM d, yyyy"
                  filterDate={isWeekday}
                  className="block w-full rounded-lg border-gray-200 bg-fuchsia-50 px-1 font-bricolage text-gray-700 placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
                {error?.message ? (
                  <small className="ml-2 font-bricolage text-xs text-[firebrick] dark:text-[#ec5c5c]">
                    {error?.message}
                  </small>
                ) : null}
              </Fragment>
            )}
          />
        </label>
      </div>
      <div className="mt-6">
        <label
          htmlFor="timeInput"
          className="mb-2 block font-bricolage text-sm text-gray-900 dark:text-gray-200"
        >
          Pick Time
          <div className="time relative flex w-full items-center justify-center gap-2 rounded-lg border-gray-200 bg-fuchsia-50 before:absolute before:left-[50%] before:translate-y-[15%] before:text-gray-700 before:content-[url('/svg/arrow.svg')] focus:border-none focus:outline-none focus:ring-0 dark:border dark:border-solid dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:before:text-gray-300 dark:focus:border-blue-400">
            <Controller
              control={control}
              name="startTime"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <Fragment>
                  <DatePicker
                    id="timeInput"
                    showIcon
                    icon={<TimeIcon />}
                    selected={value}
                    onChange={(date) => onChange(date)}
                    onBlur={onBlur}
                    ref={ref}
                    showTimeSelect
                    showTimeSelectOnly
                    placeholderText="12:00 AM"
                    timeIntervals={15}
                    filterTime={filterPassedTime}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="block w-full rounded-lg border-gray-200 bg-fuchsia-50 px-1 font-bricolage text-gray-700 placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                  {error?.message ? (
                    <small className="ml-2 font-bricolage text-xs text-[firebrick] dark:text-[#ec5c5c]">
                      {error?.message}
                    </small>
                  ) : null}
                </Fragment>
              )}
            />
            <Controller
              control={control}
              name="endTime"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <Fragment>
                  <DatePicker
                    id="timeInput"
                    selected={value}
                    onChange={(date) => onChange(date)}
                    onBlur={onBlur}
                    ref={ref}
                    placeholderText="01:00 AM"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    filterTime={filterPassedTime}
                    className="block w-full rounded-lg border-gray-200 bg-fuchsia-50 px-1 font-bricolage text-gray-700 placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                  {error?.message ? (
                    <small className="ml-2 font-bricolage text-xs text-[firebrick] dark:text-[#ec5c5c]">
                      {error?.message}
                    </small>
                  ) : null}
                </Fragment>
              )}
            />
          </div>
        </label>
      </div>
    </Fragment>
  );
};

export default Step2;
