const fizzBuzz = num => {
  if (typeof num === 'number')
    for (let i = 1; i <= num; i++) {
      console.log(
        i % 15 === 0 ? 'FizzBuzz' :
        i % 3 === 0 ? 'Fizz' :
        i % 5 === 0 ? 'Buzz' : i
      );
    } else return `ERROR: Input must be a number.`;
}