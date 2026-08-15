export const fibonacciObj = {
  myFunc(n) {
    n = +n;
    if (n < 1 || n % 1 !== 0) return 'ERROR: Input must be a natural number';
    if (n > 1000) return 'ERROR: Input value too high';

    const count = [0, 1];
    for (let i = 0; i < n - 1; i++) count.push(count[i] + count.at(-1));
    return count[n];
  },
  name: 'Nth Fibonacci Number',
  placeholder: 'Number',
  raw: `const fibonacci = n => {
  let count = [0, 1];
  for (let i = 0; i < n - 1; i++)
    count.push(count[i] + count[count.length - 1]);
  return count[n];
}`
};
