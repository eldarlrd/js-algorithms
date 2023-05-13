export const fizzBuzz = num => {
  if (typeof num !== 'number' || num < 1 ||
      num % 1 !== 0)
    return 'ERROR: Input must be a natural number.';
  for (let i = 1; i <= num; i++) {
    console.log(
      i % 15 === 0 ? 'FizzBuzz' :
      i % 3 === 0 ? 'Fizz' :
      i % 5 === 0 ? 'Buzz' : i
    );
  }
}