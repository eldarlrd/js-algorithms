export const convertFtoCObj = {
  name: 'Fahrenheit to Celsius',
  placeholder: 'Degrees Fahrenheit',
  myFunc(fahrenheit) {
    fahrenheit = +fahrenheit;
    if (fahrenheit / 1 !== fahrenheit)
      return 'ERROR: Input must be a number';
    const celsius = (fahrenheit - 32) / 1.8;
    return Math.round(celsius * 100) / 100 + ' °C';
  },
  raw:
`const convertFtoC = fahrenheit => {
  fahrenheit = +fahrenheit;
  if (fahrenheit / 1 !== fahrenheit)
    return 'ERROR: Input must be a number';
  const celsius = (fahrenheit - 32) / 1.8;
  return Math.round(celsius * 100) / 100;
}`
}