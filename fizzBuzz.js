const fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    console.log(
      i % 15 === 0 ? "FizzBuzz" :
      i % 3 === 0 ? "Fizz" :
      i % 5 === 0 ? "Buzz" : i
    );
  }
}