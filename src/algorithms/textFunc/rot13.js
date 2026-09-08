export const rot13Obj = {
  myFunc(str) {
    return str
      .join()
      .toUpperCase()
      .replace(/[A-Z]/g, (rotStr) => String.fromCharCode((rotStr.charCodeAt(0) % 26) + 65));
  },
  name: 'ROT13 Caesar Cipher',
  placeholder: 'String',
  raw: `const rot13 = str =>
  str.toUpperCase().replace(/[A-Z]/g, rotStr =>
    String.fromCharCode(rotStr.charCodeAt(0) % 26 + 65)
  );`,
};
