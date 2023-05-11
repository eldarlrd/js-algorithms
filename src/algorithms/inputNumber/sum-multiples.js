const multiplesOf3and5 = number => {
  if (typeof number !== 'number' ||
      number <= 0 || number % 1 !== 0)
    return 'ERROR: Input must be a natural number.';
  let sum = 0;
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      arr.push(i);
  } for (let i of arr) sum += i;
  return sum;
}