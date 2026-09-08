export const factorializeObj = {
  myFunc(num) {
    num = Math.abs(num);
    if (num % 1 !== 0) return 'ERROR: Input must be an integer';
    if (num > 1000) return 'ERROR: Input value too high';

    num = Math.abs(num.toFixed(0));
    return num === 0 ? 1 : num * factorializeObj.myFunc(num - 1);
  },
  name: 'Factorial',
  placeholder: 'Number',
  raw: `const factorialize = num => {
  num = Math.abs(num.toFixed(0));
  return num !== 0 ? num * factorialize(num - 1) : 1;
}`,
};
