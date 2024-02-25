export const largestPrimeFactorObj = {
  name: 'Largest Prime Factor',
  placeholder: 'Number',
  myFunc(num) {
    num = +num;
    if (num <= 0 || num % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    else if (num > 1000)
      return 'ERROR: Input value too high';
    const primeArr = [];
    const factorArr = largestPrimeFactorObj.isFactor(num);
    while (num >= 2) {
      if (largestPrimeFactorObj.isPrime(num)) primeArr.push(num);
      num--;
    }
    const primeFactorArr = primeArr.filter(e => factorArr.includes(e));
    return Math.max(...primeFactorArr);
  },
  isPrime(num) {
    let i = Math.floor(Math.sqrt(num));
    while (i >= 2) {
      if (num % i === 0)
        return false;
      else i--;
    } return true;
  },
  isFactor(num) {
    const factorArr = [];
    for (let i = 2; i <= num; i++)
      if (num % i === 0) factorArr.push(i);
    return factorArr;
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

// Checking for Factors
const isFactor = num => {
  const factorArr = [];
  for (let i = 2; i <= num; i++)
    if (num % i === 0) factorArr.push(i);
  return factorArr;
}

// Find the Largest Prime Factor
const largestPrimeFactor = num => {
  num = +num;
  if (num <= 0 || num % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  else if (num > 1000)
    return 'ERROR: Input value too high';
  const primeArr = [];
  const factorArr = isFactor(num);
  while (num >= 2) {
    if (isPrime(num)) primeArr.push(num);
    num--;
  }
  const primeFactorArr = primeArr.filter(
    e => factorArr.includes(e));
  return Math.max(...primeFactorArr);
}`
}