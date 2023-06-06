export const fibonacciObj = {
  name: 'Nth Fibonacci Number',
  placeholder: 'Number',
  myFunc(n) {
    n = +n;
    if (n < 1 || n % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    n = Math.floor(n);
    let count = [0, 1];
    for (let i = 0; i < n - 1; i++) {
      count.push(count[i] + count[count.length - 1]);
    } return count[n];
  },
  raw:
`const fibonacci = n => {
  n = +n;
  if (n < 1 || n % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  n = Math.floor(n);
  let count = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    count.push(count[i] + count[count.length - 1]);
  } return count[n];
}`
}