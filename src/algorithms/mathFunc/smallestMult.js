export const smallestMultObj = {
  gcd(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    let newMin;
    while (min !== 0) {
      newMin = max % min;
      max = min;
      min = newMin;
    }
    return max;
  },
  lcm(a, b) {
    return (a * b) / this.gcd(a, b);
  },
  myFunc(n) {
    n = +n;
    if (n < 1 || n % 1 !== 0) return 'ERROR: Input must be a natural number';
    if (n > 100) return 'ERROR: Input value too high';

    let mult = 1;
    for (let i = 2; i <= n; i++) mult = smallestMultObj.lcm(mult, i);
    return mult;
  },
  name: 'Smallest Multiple',
  placeholder: 'Number',
  raw: `// Greatest Common Divisor
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
const lcm = (a, b) => (a * b) / gcd(a, b);

const smallestMult = n => {
  let mult = 1;
  for (let i = 2; i <= n; i++)
    mult = lcm(mult, i);
  return mult;
}`
};
