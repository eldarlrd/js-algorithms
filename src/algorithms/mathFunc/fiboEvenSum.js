export const fiboEvenSumObj = {
  name: 'Sum Even Fibonacci Numbers',
  placeholder: 'Number',
  myFunc(n) {
    n = +n;
    if (n < 1 || n % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    else if (n > 10000000)
      return 'ERROR: Input value too high';
    let count = [0, 1];
    for (let i = 0; i < n - 1; i++) {
      count.push(count[i] + count[count.length - 1]);
    } const trimCount = count.filter(e => e < n + 1);
    const evenCount = trimCount.filter(e => e % 2 === 0);
    let evenSum = 0;
    for (let i of evenCount) {
      evenSum += i;
    } return evenSum;
  },
  raw:
`const fiboEvenSum = n => {
  n = +n;
  if (n < 1 || n % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  else if (n > 10000000)
    return 'ERROR: Input value too high';
  let count = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    count.push(count[i] + count[count.length - 1]);
  } const trimCount = count.filter(e => e < n + 1);
  const evenCount = trimCount.filter(e => e % 2 === 0);
  let evenSum = 0;
  for (let i of evenCount) {
    evenSum += i;
  } return evenSum;
}`
}