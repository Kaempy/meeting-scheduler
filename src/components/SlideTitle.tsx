/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

const SlideTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="my-3 text-center font-fira text-2xl font-bold text-gray-900 dark:text-gray-300">
      {title}
    </h2>
  );
};

export default memo(SlideTitle);
