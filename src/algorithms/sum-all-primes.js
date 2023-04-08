// Checking for Prime Numbers
const isPrime = num => {
  if (typeof num !== 'number' || num <= 0 || num % 1 !== 0)
    return 'ERROR: Input must be a natural number.';
  let i = Math.floor(Math.sqrt(num));
  while (i >= 2) {
    if (num % i === 0)
      return false;
    else i--;
  } return true;
}
// Summarizing the Prime Numbers
const sumPrimes = num => {
  if (typeof num !== 'number' || num <= 0 || num % 1 !== 0)
    return 'ERROR: Input must be a natural number.';
  let sum = 0;
  while (num >= 2) {
    isPrime(num) ? sum += num : false;
    num--;
  } return sum;
}