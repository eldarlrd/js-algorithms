export const translatePigLatinObj = {
  name: 'Pig Latin Translator',
  placeholder: 'String',
  myFunc(str) {
    return str
           .join().split('')
           .filter(e => isNaN(e))
           .join('')
           .replace(/^[aeiou]\w*/i, '$&way')
           .replace(/(^[^aeiou]+)(\w*)/i, '$2$1ay')
           .toLowerCase();
  },
  raw:
`const translatePigLatin = str => {
  return typeof str === 'string'
    ? str
      .split('')
      .filter(e => isNaN(e))
      .join('')
      .replace(/^[aeiou]\\w*/i, '$&way')
      .replace(/(^[^aeiou]+)(\\w*)/i, '$2$1ay')
      .toLowerCase()
    : 'ERROR: Input must be a string.';
}`
}