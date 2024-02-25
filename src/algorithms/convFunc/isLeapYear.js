export const isLeapYearObj = {
  name: 'Leap Year',
  placeholder: 'Year',
  myFunc(year) {
    year = +year;
    if (year <= 0 || year % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    else if (year > 13787000000)
      return 'ERROR: Input older than our universe';
    if (year % 4 === 0 &&
        year % 100 !== 0 &&
        year % 400 !== 0)
      return 'True';
    else if (year % 400 === 0)
      return 'True';
    return 'False';
  },
  raw:
`const isLeapYear = year => {
  if (year <= 0 || year % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  else if (year > 13787000000)
    return 'ERROR: Input older than our universe';
  if (year % 4 === 0 &&
      year % 100 !== 0 &&
      year % 400 !== 0)
    return true;
  else if (year % 400 === 0)
    return true;
  return false;
}`
}