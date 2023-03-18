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