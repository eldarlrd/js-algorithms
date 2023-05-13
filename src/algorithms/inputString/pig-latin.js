export const translatePigLatin = str => {
  return typeof str === 'string'
    ? str
      .replace(/^[aeiou]\w*/i, '$&way')
      .replace(/(^[^aeiou]+)(\w*)/i, '$2$1ay')
      .toLowerCase()
    : 'ERROR: Input must be a string.';
}