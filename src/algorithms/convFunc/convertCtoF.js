export const convertCtoFObj = {
  name: 'Celsius to Fahrenheit',
  placeholder: 'Degrees Celsius',
  myFunc(celsius) {
    celsius = +celsius;
    if (celsius / 1 !== celsius)
      return 'ERROR: Input must be a number';

    const fahrenheit = celsius * 1.8 + 32;
    return Math.round(fahrenheit * 100) / 100 + ' °F';
  },
  raw:
`const convertCtoF = celsius => {
  const fahrenheit = celsius * 1.8 + 32;
  return Math.round(fahrenheit * 100) / 100;
}`
}