export const isLeapYearObj = {
  name: 'Leap Year',
  placeholder: 'Year',
  myFunc(year) {
    year = +year;
    if (year % 4 === 0 &&
        year % 100 !== 0 &&
        year % 400 !== 0)
      return true;
    else if (year % 400 === 0)
      return true;
    return false;
  },
  raw:
`const isLeapYear = year => {
  if (year % 4 === 0 &&
      year % 100 !== 0 &&
      year % 400 !== 0)
    return true;
  else if (year % 400 === 0)
    return true;
  return false;
}`
}