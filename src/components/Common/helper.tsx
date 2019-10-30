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

/**************************** D3 Translate for Robinhood *********************************/
const smallRadius = 125;
const mediumRadius = 150;
const largeRadius = 230;

const mobileGraphContainerHeight = 320;
const desktopGraphContainerHeight = 600;

export const pieWidth = (windowWidth, windowHeight) => {
  let width;
  if (windowWidth < 768) {
    width = smallRadius;
  } else if (windowWidth < 1024) {
    width = mediumRadius;
  } else {
    width = largeRadius;
  }
  return width;
};

export const translateX = (windowWidth) => {
  let x;
  if (windowWidth < 768) {
    x = windowWidth / 2;
  } else {
    x = (windowWidth - 200) / 3;
  }
  return x;
};

export const translateY = (windowWidth, windowHeight) => {
  let y;
  if (windowWidth < 768) {
    y = mobileGraphContainerHeight / 2;
  } else {
    y = desktopGraphContainerHeight / 2;
  }
  return y;
};
