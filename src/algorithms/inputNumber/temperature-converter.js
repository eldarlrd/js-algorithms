// Convert Celsius to Fahrenheit
export const convertCtoF = celsius => {
  if (typeof celsius !== 'number')
    return 'ERROR: Input must be a number.';
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
// Convert Fahrenheit to Celsius
export const convertFtoC = fahrenheit => {
  if (typeof fahrenheit !== 'number')
    return 'ERROR: Input must be a number.';
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}