export const factorializeObj = {
  name: 'Factorial',
  placeholder: 'Number',
  myFunc(num) {
    num = +num;
    if (num % 1 !== 0)
      return 'ERROR: Input must be an integer';
    num = Math.abs(num.toFixed(0));
    return num !== 0 ? num * factorializeObj.myFunc(num - 1) : 1;
  },
  raw:
`const factorialize = num => {
  num = +num;
  if (num % 1 !== 0)
    return 'ERROR: Input must be an integer';
  num = Math.abs(num.toFixed(0));
  return num !== 0 ? num * factorialize(num - 1) : 1;
}`
}