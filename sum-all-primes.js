// Checking for Prime Numbers
const isPrime = num => {
  let i = Math.floor(Math.sqrt(num));
  while (i >= 2) {
    if (num % i === 0) {
      return false;
    } else i--;
  } return true;
}
// Summarizing the Prime Numbers
const sumPrimes = num => {
  let sum = 0;
  while (num >= 2) {
    isPrime(num) ? sum += num : false;
    num--;
  } return sum;
}