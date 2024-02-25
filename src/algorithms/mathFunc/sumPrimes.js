export const sumPrimesObj = {
  name: 'Sum All Primes up to N',
  placeholder: 'Number',
  myFunc(num) {
    num = +num;
    if (num <= 0 || num % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    else if (num > 1000)
      return 'ERROR: Input value too high';
    let sum = 0;
    while (num >= 2) {
      sumPrimesObj.isPrime(num) ? sum += num : false;
      num--;
    } return sum;
  },
  isPrime(num) {
    let i = Math.floor(Math.sqrt(num));
    while (i >= 2) {
      if (num % i === 0)
        return false;
      else i--;
    } return true;
  },
  raw:
`// Checking for Prime Numbers
const isPrime = num => {
  let i = Math.floor(Math.sqrt(num));
  while (i >= 2) {
    if (num % i === 0)
      return false;
    else i--;
  } return true;
}
// Summarizing the Prime Numbers
const sumPrimes = num => {
  num = +num;
  if (num <= 0 || num % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  else if (num > 1000)
    return 'ERROR: Input value too high';
  let sum = 0;
  while (num >= 2) {
    isPrime(num) ? sum += num : false;
    num--;
  } return sum;
}`
}