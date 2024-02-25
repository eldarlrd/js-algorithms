export const rot13Obj = {
  name: 'ROT13 Caesar Cipher',
  placeholder: 'String',
  myFunc(str) {
    return (
      str.join().toUpperCase().replace(/[A-Z]/g, rotStr =>
        String.fromCharCode(rotStr.charCodeAt(0) % 26 + 65)
      )
    );
  },
  raw:
`const rot13 = str => {
  return typeof str === 'string' ?
    str.toUpperCase().replace(/[A-Z]/g, rotStr =>
      String.fromCharCode(rotStr.charCodeAt(0) % 26 + 65)
    ) : 'ERROR: Input must be a string';
}`
}