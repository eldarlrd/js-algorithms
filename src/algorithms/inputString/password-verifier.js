export const passwordVerifyObj = {
  name: 'Password Verifier',
  placeholder: 'Password',
  myFunc(str) {
    const check = new RegExp(
      ['^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])',
       '(?=.*[!@#$%&?|^*_=+-]).{8,32}$']
      .join('')
    );
    return check.test(str.join());
  },
  raw:
`const passwordVerify = str => {
  if (typeof str !== 'string')
    return 'ERROR: Input must be a string';
  const check = new RegExp(
    ['^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])',
     '(?=.*[!@#$%&?|^*_=+-]).{8,32}$']
    .join('')
  );
  return check.test(str);
}`
}