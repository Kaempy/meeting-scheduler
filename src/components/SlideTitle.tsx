import { memo } from 'react';

const SlideTitle = ({title}:{title:string}) => {
  return (
    <p className="my-3 text-center text-gray-900 dark:text-gray-300">
    {title}
    </p>
  );
}

export default memo(SlideTitle)