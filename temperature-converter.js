// Convert Celsius to Fahrenheit
const convertCtoF = celsius => {
  if (typeof celsius === 'number') {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  } return 'ERROR: Input must be a number.';
}
// Convert Fahrenheit to Celsius
const convertFtoC = fahrenheit => {
  if (typeof fahrenheit === 'number') {
    const celsius = (fahrenheit - 32) / 1.8;
    return celsius;
  } return 'ERROR: Input must be a number.';
}