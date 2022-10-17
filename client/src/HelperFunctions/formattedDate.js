const formattedDate = (date) => {
  const months = ['Months not 0 indexed', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let monthsIndex = Number(date.slice(5, 7));
  let day = date.slice(8, 10);
  if (day[0] === '0') {
    day = day[1];
  }

  return `${months[monthsIndex]} ${day}, ${date.slice(0, 4)}`;
};

export default formattedDate;