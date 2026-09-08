const camelCasePattern = /(?<lowercase>[a-z])(?<uppercase>[A-Z])/g;
const separatorPattern = /[_\s]/;

export const spinalCaseObj = {
  myFunc(str) {
    return str
      .join()
      .replace(camelCasePattern, '$<lowercase> $<uppercase>')
      .split(separatorPattern)
      .join('-')
      .toLowerCase();
  },
  name: 'Spinal Tap Case',
  placeholder: 'String',
  raw: `const spinalCase = str =>
  str.replace(/([a-z])([A-Z])/g, '$1 $2')
     .split(/[_\\s]/)
     .join('-')
     .toLowerCase();`,
};
