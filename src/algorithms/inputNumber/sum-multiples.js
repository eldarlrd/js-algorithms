export const multiplesOf3and5Obj = {
  name: 'Sum All Multiples of 3 & 5',
  placeholder: 'Number',
  myFunc(number) {
    if (number <= 0 || number % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    let sum = 0;
    let arr = [];
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0)
        arr.push(i);
    } for (let i of arr) sum += i;
    return sum;
  },
  raw:
`const multiplesOf3and5 = number => {
  if (number <= 0 || number % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  let sum = 0;
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      arr.push(i);
  } for (let i of arr) sum += i;
  return sum;
}`
}