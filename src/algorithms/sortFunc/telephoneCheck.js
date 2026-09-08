export const telephoneCheckObj = {
  myFunc(str) {
    const check = new RegExp(
      [
        '^(\\+?\\d{1,3}\\s?)?(\\(\\d{2,3}\\)|\\d{2,3})',
        '[\\s\\-]?\\d{3}[\\s\\-]?\\d{2}[\\s\\-]?\\d{2}$',
      ].join('')
    );
    return check.test(str.join()) ? 'True' : 'False';
  },
  name: 'Phone Number Verifier',
  placeholder: 'Phone Number',
  raw: `const telephoneCheck = str => {
  const check = new RegExp(
    ['^(\\\\+?\\\\d{1,3}\\\\s?)?(\\\\(\\\\d{2,3}\\\\)|\\\\d{2,3})',
     '[\\\\s\\\\-]?\\\\d{3}[\\\\s\\\\-]?\\\\d{2}[\\\\s\\\\-]?\\\\d{2}$']
    .join('')
  );
  return check.test(str);
}`,
};
