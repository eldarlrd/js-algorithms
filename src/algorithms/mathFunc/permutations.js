export const permutationsObj = {
  factorialize(num) {
    num = Math.abs(num.toFixed(0));
    return num === 0 ? 1 : num * this.factorialize(num - 1);
  },
  myFunc(inputArr) {
    const n = Math.abs(inputArr[0]);
    const m = Math.abs(inputArr[1]);
    if (inputArr.length !== 2 || !n || !m) return 'ERROR: Inputs must be (number, number)';
    if (n % 1 !== 0 || m % 1 !== 0) return 'ERROR: Inputs must be integers';
    if (n > 1000 || m > 1000) return 'ERROR: Input values too high';
    if (n < m) return 'ERROR: Input M greater than N';

    return permutationsObj.factorialize(n) / permutationsObj.factorialize(n - m);
  },
  name: 'Permutations of N in Sets of M',
  placeholder: 'N Elements, Sets of M',
  raw: `// Calculate the Factorials
const factorialize = num => {
  num = Math.abs(num.toFixed(0));
  return num !== 0 ? num * factorialize(num - 1) : 1;
}

// Find Permutations of N
const permutations = (n, m) =>
  factorialize(n) / factorialize(n - m);`,
};
