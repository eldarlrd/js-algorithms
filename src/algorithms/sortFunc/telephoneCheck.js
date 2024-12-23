export const telephoneCheckObj = {
  name: 'Phone Number Verifier',
  placeholder: 'Phone Number',
  myFunc(str) {
    const check = new RegExp(
      ['^(\\+?\\d{1,3}\\s?)?(\\(\\d{2,3}\\)|\\d{2,3})',
       '[\\s\\-]?\\d{3}[\\s\\-]?\\d{2}[\\s\\-]?\\d{2}$']
      .join('')
    );
    return check.test(str.join()) ? 'True' : 'False';
  },
  raw:
`const telephoneCheck = str => {
  const check = new RegExp(
    ['^(\\\\+?\\\\d{1,3}\\\\s?)?(\\\\(\\\\d{2,3}\\\\)|\\\\d{2,3})',
     '[\\\\s\\\\-]?\\\\d{3}[\\\\s\\\\-]?\\\\d{2}[\\\\s\\\\-]?\\\\d{2}$']
    .join('')
  );
  return check.test(str);
}`
}