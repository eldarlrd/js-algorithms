export const smallestMultObj = {
  name: 'Smallest Multiple',
  placeholder: 'Number',
  myFunc(n) {
    n = +n;
    if (n < 1 || n % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    else if (n > 100)
      return 'ERROR: Input value too high';
  
    let mult = 1;
    for (let i = 2; i <= n; i++)
      mult = smallestMultObj.lcm(mult, i);
    return mult;
  },
  lcm(a, b) {
    return (a * b) / smallestMultObj.gcd(a, b);
  },
  gcd(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let newMin;
    while (min !== 0) {
      newMin = max % min;
      max = min;
      min = newMin;
    } return max;
  },
  raw:
`// Greatest Common Divisor
const gcd = (a, b) => {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let newMin;
  while (min !== 0) {
    newMin = max % min;
    max = min;
    min = newMin;
  } return max;
}

// Least Common Multiple
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
}

const smallestMult = n => {
  n = +n;
  if (n < 1 || n % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  else if (n > 100)
    return 'ERROR: Input value too high';

  let mult = 1;
  for (let i = 2; i <= n; i++)
    mult = lcm(mult, i);
  return mult;
}`
}