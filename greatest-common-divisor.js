const gcd = (a, b) => {
  if (typeof a !== 'number' ||
      typeof b !== 'number')
    return 'ERROR: Inputs must be (number, number).';
  if (a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0)
    return 'ERROR: Inputs must be natural numbers.';
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let newMin;
  while (min !== 0) {
    newMin = max % min;
    max = min;
    min = newMin;
  } return max;
}