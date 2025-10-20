export const rgbaToHexObj = {
  name: 'RGBA to HEX',
  placeholder: 'Red, Green, Blue, Alpha',
  myFunc(inputArr) {
    const [r, g, b, a = 1] = inputArr;
    const colors =
      a < 1 ? [+r, +g, +b, Math.round(a * 255)] : [+r, +g, +b];

    if (colors.some(c => c > 255 || c < 0 || c % 1 !== 0))
      return 'ERROR: Inputs out of bounds';

    return '#' + colors.map(
      c => c.toString(16).padStart(2, '0')).join('');
  },
  raw:
`const rgbaToHex = (r, g, b, a = 1) => {
  const colors =
    a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b];

  return '#' + colors.map(
    c => c.toString(16).padStart(2, '0')).join('');
}`
};
