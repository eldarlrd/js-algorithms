const multiplesOf3and5 = number => {
  let arr = [];
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      arr.push(i);
  } for (let i of arr) sum += i;
  return sum;
}