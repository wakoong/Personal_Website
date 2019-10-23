// toFixed returns a string instead of an integer
export const roundToTenth = (num) => {
  return Number.parseFloat(num).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const displayCurrency = (num, currency = '$') => {
  if (num >= 0) {
    return `${currency}${this.roundToTenth(num)}`;
  } else {
    return `-${currency}${this.roundToTenth(Math.abs(num))}`;
  }
};

/**************************** Date *********************************/
export const getMonth = (utc) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[new Date(utc).getMonth()];
};

export const getDate = (utc) => {
  return new Date(utc).getDate();
};

export const getYear = (utc) => {
  return new Date(utc).getFullYear();
};
