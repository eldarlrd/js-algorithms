export const fizzBuzzObj = {
  name: 'FizzBuzz',
  placeholder: 'Number',
  myFunc(num) {
    num = +num;
    const arr = [];
    if (num < 1 || num % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    else if (num > 1000)
      return 'ERROR: Input value too high';
    for (let i = 1; i <= num; i++) {
      arr.push(
        i % 15 === 0 ? ' FizzBuzz' :
        i % 3 === 0 ? ' Fizz' :
        i % 5 === 0 ? ' Buzz' : ` ${i}`
      );
    } return arr;
  },
  raw:
`const fizzBuzz = num => {
  num = +num;
  const arr = [];
  if (num < 1 || num % 1 !== 0)
    return 'ERROR: Input must be a natural number';
  else if (num > 1000)
    return 'ERROR: Input value too high';
  for (let i = 1; i <= num; i++) {
    arr.push(
      i % 15 === 0 ? ' FizzBuzz' :
      i % 3 === 0 ? ' Fizz' :
      i % 5 === 0 ? ' Buzz' : \` \${i}\`
    );
  } return arr;
}`
}