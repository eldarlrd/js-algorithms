export const convertToRomanObj = {
  name: 'Roman Numeral Converter',
  placeholder: 'Number',
  myFunc(num) {
    num = +num;
    if (num <= 0 || num % 1 !== 0)
      return 'ERROR: Input must be a natural number';
    else if (num > 1000000)
      return 'ERROR: Input value too high';

    return 'I'.repeat(num)
              .replace(/I{5}/g, 'V')
              .replace(/V{2}/g, 'X')
              .replace(/X{5}/g, 'L')
              .replace(/L{2}/g, 'C')
              .replace(/C{5}/g, 'D')
              .replace(/D{2}/g, 'M')
              .replace(/DC{4}/g, 'CM')
              .replace(/C{4}/g, 'CD')
              .replace(/LX{4}/g, 'XC')
              .replace(/X{4}/g, 'XL')
              .replace(/VI{4}/g, 'IX')
              .replace(/I{4}/g, 'IV');
  },
  raw:
`const convertToRoman = num =>
  'I'.repeat(num)
     .replace(/I{5}/g, 'V')
     .replace(/V{2}/g, 'X')
     .replace(/X{5}/g, 'L')
     .replace(/L{2}/g, 'C')
     .replace(/C{5}/g, 'D')
     .replace(/D{2}/g, 'M')
     .replace(/DC{4}/g, 'CM')
     .replace(/C{4}/g, 'CD')
     .replace(/LX{4}/g, 'XC')
     .replace(/X{4}/g, 'XL')
     .replace(/VI{4}/g, 'IX')
     .replace(/I{4}/g, 'IV');`
}