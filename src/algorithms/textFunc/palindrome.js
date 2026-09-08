export const palindromeObj = {
  myFunc(str) {
    const fwd = str.join().replace(/[\W_]/g, '').toLowerCase();
    const bwd = fwd.split('').reverse().join('');
    return fwd === bwd ? 'True' : 'False';
  },
  name: 'Palindrome Checker',
  placeholder: 'String',
  raw: `const palindrome = str => {
  const fwd = str.replace(/[\\W_]/g, '').toLowerCase();
  const bwd = fwd.split('').reverse().join('');
  return fwd === bwd ? true : false;
}`,
};
