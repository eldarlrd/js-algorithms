export const rot13Obj = {
  name: 'ROT13 Caesar Cipher',
  placeholder: 'String',
  myFunc(str) {
    return (
      str.join().replace(/[A-Z]/g, rotStr =>
        String.fromCharCode(rotStr.charCodeAt(0) % 26 + 65)
      ).toUpperCase()
    );
  },
  raw:
`const rot13 = str => {
  return typeof str === 'string' ?
    str.replace(/[A-Z]/g, rotStr =>
      String.fromCharCode(rotStr.charCodeAt(0) % 26 + 65)
    ).toUpperCase() : 'ERROR: Input must be a string';
}`
}