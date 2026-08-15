export const translatePigLatinObj = {
  myFunc(str) {
    return str
      .join()
      .split('')
      .filter((e) => Number.isNaN(e))
      .join('')
      .replace(/^[aeiou]\w*/i, '$&way')
      .replace(/(^[^aeiou]+)(\w*)/i, '$2$1ay')
      .toLowerCase();
  },
  name: 'Pig Latin Translator',
  placeholder: 'String',
  raw: `const translatePigLatin = str =>
  str.split('')
     .filter(e => isNaN(e))
     .join('')
     .replace(/^[aeiou]\\w*/i, '$&way')
     .replace(/(^[^aeiou]+)(\\w*)/i, '$2$1ay')
     .toLowerCase();`
};
