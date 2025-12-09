export const factorializeObj = {
  name: 'Factorial',
  placeholder: 'Number',
  myFunc(num) {
    num = Math.abs(num);
    if (num % 1 !== 0) return 'ERROR: Input must be an integer';
    else if (num > 1000) return 'ERROR: Input value too high';

    num = Math.abs(num.toFixed(0));
    return num !== 0 ? num * factorializeObj.myFunc(num - 1) : 1;
  },
  raw:
`const factorialize = num => {
  num = Math.abs(num.toFixed(0));
  return num !== 0 ? num * factorialize(num - 1) : 1;
}`
}
