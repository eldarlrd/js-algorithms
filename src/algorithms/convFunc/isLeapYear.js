export const isLeapYearObj = {
  myFunc(year) {
    year = +year;
    if (year <= 0 || year % 1 !== 0) return 'ERROR: Input must be a natural number';
    if (year > 13787000000) return 'ERROR: Input older than our universe';

    if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) return 'True';
    if (year % 400 === 0) return 'True';
    return 'False';
  },
  name: 'Leap Year',
  placeholder: 'Year',
  raw: `const isLeapYear = year => {
  if (year % 4 === 0 &&
      year % 100 !== 0 &&
      year % 400 !== 0) return true;
  else if (year % 400 === 0) return true;
  return false;
}`
};
