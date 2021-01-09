export const getDate = (today = new Date(), separator = '/') => {
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}${separator}${mm}${separator}${dd}`;
};

export const getTwoDatesDiff = (firstDate: Date, secondDate: Date) => {
  const diff = Math.abs(firstDate.getTime() - secondDate.getTime());
  return Math.round(diff / (1000 * 3600 * 24));
};

export const getDatesBetweenDates = (startDate = new Date(), endDate = new Date()) => {
  let dates: string[] = [];
  //to avoid modifying the original date
  const theDate = new Date(startDate);
  while (theDate <= endDate) {
    dates = [...dates, getDate(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};
