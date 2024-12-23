export const palindromeObj = {
  name: 'Palindrome Checker',
  placeholder: 'String',
  myFunc(str) {
    const fwd = str.join().replace(/[\W_]/g, '').toLowerCase();
    const bwd = fwd.split('').reverse().join('');
    return fwd === bwd ? 'True' : 'False';
  },
  raw:
`const palindrome = str => {
  const fwd = str.replace(/[\\W_]/g, '').toLowerCase();
  const bwd = fwd.split('').reverse().join('');
  return fwd === bwd ? true : false;
}`
}