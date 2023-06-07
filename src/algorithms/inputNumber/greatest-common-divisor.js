export const gcdObj = {
  name: 'Greatest Common Divisor',
  placeholder: 'Number A, Number B',
  myFunc(inputArr) {
    const a = +inputArr[0];
    const b = +inputArr[1];
    if (inputArr.length !== 2 ||
        !a || !b)
      return 'ERROR: Inputs must be (number, number)';
    if (a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0)
      return 'ERROR: Inputs must be natural numbers';
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
`const gcd = (a, b) => {
  a = +a;
  b = +b;
  if (!a || !b)
    return 'ERROR: Inputs must be (number, number)';
  if (a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0)
    return 'ERROR: Inputs must be natural numbers';
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let newMin;
  while (min !== 0) {
    newMin = max % min;
    max = min;
    min = newMin;
  } return max;
}`
}