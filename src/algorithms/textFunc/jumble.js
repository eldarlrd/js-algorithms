export const jumbleObj = {
  myFunc(str) {
    return str
      .join('')
      .split(' ')
      .map((word) => {
        if (word.length <= 2) return word;
        const mid = word.slice(1, -1).split('').sort().join('');

        return word[0] + mid + word.at(-1);
      })
      .join(' ');
  },
  name: 'Jumble Text',
  placeholder: 'String',
  raw: `const jumble = str =>
  str.split(' ').map(word => {
    if (word.length <= 2) return word;
    const mid = word.slice(1, -1).split('').sort().join('');

    return word[0] + mid + word[word.length - 1];
  }).join(' ');`
};
