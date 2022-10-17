const formatedDate = (date) => {
  const months = ['Months not 0 indexed', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let monthsIndex = Number(date.slice(5, 7));
  let day = date.slice(8, 10);
  if (date.slice(8) === '0') {
    day = day.slice(1);
  }

  return `${months[monthsIndex]} ${day}, ${date.slice(0, 4)}`;
};

export default formatedDate;