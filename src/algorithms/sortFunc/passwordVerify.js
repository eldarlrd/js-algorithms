export const passwordVerifyObj = {
  name: 'Password Verifier',
  placeholder: 'Password',
  myFunc(str) {
    const check = new RegExp(
      ['^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])',
       '(?=.*[!@#$%&?|^*_=+-]).{8,32}$']
      .join('')
    );
    return check.test(str.join()) ? 'True' : 'False';
  },
  raw:
`const passwordVerify = str => {
  const check = new RegExp(
    ['^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])',
     '(?=.*[!@#$%&?|^*_=+-]).{8,32}$']
    .join('')
  );
  return check.test(str);
}`
}