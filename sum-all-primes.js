// Checking for Prime Numbers
const isPrime = num => {
  let i = Math.floor(Math.sqrt(num));
  while (i >= 2) {
    if (num % i === 0) {
      return false;
    } i--;
  } return true;
}
// Summarizing the Prime Numbers
const sumPrimes = num => {
  let j = num;
  let sum = 0;
  while (j >= 2) {
    isPrime(j) ? sum += j : false;
    j--;
  } return sum;
}
