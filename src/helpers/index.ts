const getDay = (date: Date): number => {
  return date.getDay();
};

const formatISODateToCustomFormat = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};
const convertISOToTimeRange = (startISO: string, endISO: string): string => {
  const startTime = new Date(startISO);
  const endTime = new Date(endISO);

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedStartTime = startTime.toLocaleTimeString('en-US', options);
  const formattedEndTime = endTime.toLocaleTimeString('en-US', options);

  return `${formattedStartTime} - ${formattedEndTime}`;
};

const capitalizeFirstLetter = (word: string): string => {
  const words = word.split(' ');
  const capitalizedWords = words.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });

  return capitalizedWords.join(' ');
};
const generateNameAvatar = (name: string): string => {
  const nameArr = name.split(' ');
  const avatarString = nameArr.map((item) => item.charAt(0).toUpperCase());
  return avatarString.join('');
};

export {
  capitalizeFirstLetter,
  convertISOToTimeRange,
  formatISODateToCustomFormat,
  generateNameAvatar,
  getDay,
};
