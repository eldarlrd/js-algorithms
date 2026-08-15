export const convertCtoFObj = {
  myFunc(celsius) {
    celsius = +celsius;
    if (celsius / 1 !== celsius) return 'ERROR: Input must be a number';

    const fahrenheit = celsius * 1.8 + 32;
    return Math.round(fahrenheit * 100) / 100 + ' °F';
  },
  name: 'Celsius to Fahrenheit',
  placeholder: 'Degrees Celsius',
  raw: `const convertCtoF = celsius => {
  const fahrenheit = celsius * 1.8 + 32;
  return Math.round(fahrenheit * 100) / 100;
}`
};
