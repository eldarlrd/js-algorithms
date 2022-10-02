// Convert Celsius to Fahrenheit
const convertCtoF = celsius => {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
// Convert Fahrenheit to Celsius
const convertFtoC = fahrenheit => {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}