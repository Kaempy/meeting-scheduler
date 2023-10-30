import {
  capitalizeFirstLetter,
  convertISOToTimeRange,
  formatISODateToCustomFormat,
  generateNameAvatar,
} from '@helpers/index';
import { useStore } from '@hooks/useCtx';
import { EditIcon } from '@icons/index';
import Card from '@shared/Card';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './FormElement';

const DetailsModal = () => {
  const { modalHandlers, edit } = useStore();
  const { setValue } = useForm();
  const data = localStorage.getItem('values');
  const storedData = JSON.parse(data!);
  const { day, startTime, endTime, type, desc, gName, gEmail } = storedData;

  const meetingDay = formatISODateToCustomFormat(day);
  const time = convertISOToTimeRange(startTime, endTime);
  const description = desc.charAt(0).toUpperCase() + desc.slice(1);

  const clickHandler = () => {
    if (data) {
      const retrievedDay = new Date(storedData.day);
      const retrivedStartTime = new Date(storedData.startTime);
      const retrievedEndTime = new Date(storedData.endTime);
      setValue('name', storedData.name);
      setValue('email', storedData.email);
      setValue('day', retrievedDay);
      setValue('startTime', retrivedStartTime);
      setValue('endTime', retrievedEndTime);
      setValue('type', storedData.type);
      setValue('desc', storedData.desc);
      setValue('gName', storedData.gName);
      setValue('gEmail', storedData.gEmail);
    }
    edit();
  };
  const content = [
    {
      id: useId(),
      title: 'Meeting Date',
      info: meetingDay,
    },
    {
      id: useId(),
      title: 'Meeting Time',
      info: time,
    },
    {
      id: useId(),
      title: 'Meeting Type',
      info: capitalizeFirstLetter(type),
    },
  ];
  return (
    <Card>
      <section className="details h-[450px] w-[450px] overflow-y-scroll">
        <div className="mb-20">
          <div className="fixed flex h-20 w-[450px] items-center justify-between bg-fuchsia-50 dark:bg-slate-900">
            <h3 className="my-3 font-fira text-2xl font-semibold leading-6 text-gray-800 dark:text-slate-300">
              Meeting Summary
            </h3>
            <button
              type="button"
              onClick={clickHandler}
              className="bg-transparent p-3 text-slate-800 hover:border-transparent dark:bg-transparent dark:text-white"
            >
              <EditIcon />
            </button>
          </div>
        </div>
        <table className="w-full border-separate border-spacing-y-6">
          <tbody>
            {content.map((item) => (
              <tr key={item.id}>
                <td className="font-fira font-semibold text-gray-800 dark:text-slate-400">
                  {item.title}
                </td>
                <td>
                  <small className="rounded-full bg-fuchsia-200 px-2 py-1 font-bricolage font-semibold text-fuchsia-900 dark:bg-violet-300 dark:text-violet-900">
                    {item.info}
                  </small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="">
          <h4 className="font-fira font-semibold text-gray-800 dark:text-slate-400">
            Description
          </h4>
          <p className="mt-1 rounded bg-white p-2 font-bricolage text-sm leading-normal tracking-wide text-gray-800 dark:bg-black/20 dark:text-gray-400">
            {description}
          </p>
        </div>
        <hr className="my-6 border border-x-0 border-b-[0.125px] border-t-0 border-slate-300 dark:border-slate-700" />
        <div className="">
          <h5 className="my-4 font-fira font-semibold text-gray-800 dark:text-slate-400">
            Attendee(s)
          </h5>
          <div className="mb-2 flex items-center gap-1">
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-300 p-3 font-bricolage text-lg font-semibold text-gray-700 dark:bg-stone-700 dark:text-slate-200">
              {generateNameAvatar(gName)}
            </div>
            <div className="flex flex-col gap-0">
              <small className="font-bricolage text-base font-medium text-gray-800 dark:text-slate-200">
                {capitalizeFirstLetter(gName)}
              </small>
              <small className="font-baskerville text-xs font-medium text-gray-500 dark:text-slate-500">
                {gEmail}
              </small>
            </div>
          </div>
        </div>
        <Button
          text="Schedule Meeting"
          type="button"
          onClick={modalHandlers.openResultModal}
          className="w-full transform border-none bg-primary px-4 py-3 font-bricolage tracking-wide text-white transition-colors duration-300 hover:border-none hover:bg-[#564dff] focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-slate-800 dark:text-primary dark:hover:bg-slate-950"
        />
      </section>
    </Card>
  );
};

export default DetailsModal;
