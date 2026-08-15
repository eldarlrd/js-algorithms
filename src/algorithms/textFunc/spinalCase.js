export const spinalCaseObj = {
  myFunc(str) {
    return str
      .join()
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(/(?:_|\s)/)
      .join('-')
      .toLowerCase();
  },
  name: 'Spinal Tap Case',
  placeholder: 'String',
  raw: `const spinalCase = str =>
  str.replace(/([a-z])([A-Z])/g, '$1 $2')
     .split(/(?:_|\\s)/)
     .join('-')
     .toLowerCase();`
};
