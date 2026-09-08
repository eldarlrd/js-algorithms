const digitPattern = /\d/;
const vowelPattern = /^[aeiou]\w*/i;
const consonantPattern = /(?<consonants>^[^aeiou]+)(?<remainder>\w*)/i;

export const translatePigLatinObj = {
  myFunc(str) {
    return str
      .join()
      .split(' ')
      .map((word) =>
        word
          .split('')
          .filter((e) => !digitPattern.test(e))
          .join('')
          .replace(vowelPattern, '$&way')
          .replace(consonantPattern, '$<remainder>$<consonants>ay')
          .toLowerCase()
      )
      .join(' ');
  },
  name: 'Pig Latin Translator',
  placeholder: 'String',
  raw: `const translatePigLatin = str =>
  str.split(' ')
     .map(word =>
       word
         .split('')
         .filter(e => !/\\d/.test(e))
         .join('')
         .replace(/^[aeiou]\\w*/i, '$&way')
         .replace(/(^[^aeiou]+)(\\w*)/i, '$2$1ay')
         .toLowerCase()
     ).join(' ');`,
};
